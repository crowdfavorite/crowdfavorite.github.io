### Introduction
The O in the SOLID stands for the Open-Closed Principle. A class should be open for extension but also closed for modification.
The gain in adopting this princinple would be:

- The avoidance of depending on specific implementation.
- An easier addition of new cases.

<br>

### The problem
Let's take the example of a payment class using a pay method using a switch.

<br>

```
public function pay(string $paymentType)
{
    $pay = new PaymentClass();

    switch ($paymentType) {
        case 'cash':
            $pay->payWithCashOnDelivery();
            break;
        case 'stripe':
            $pay->payWithStripe();
            break;
        default:
            //throw an exception
            break;
    }
}

class PaymentClass
{
    public function payWithCashOnDelivery()
    {
        .
        .
        .
    }
    
    public function payWithStripe()
    {
        .
        .
        .
    }
}
```

<br>

### The solution
The above approach violates the Open-Closed principle. 
The addition of a new payment method requires an alteration of both the switch method and the PaymentClass which should host a new payment method.
The solution would be to refactor the code by adopting the factory pattern, make use of an interface to implement a pay method.
The payment request would be redirected to a PaymentFactory class with initiates different payment classes based on the type of the request that comes in. 

<div class="flex items-center mt-2 p-3">
    <img src="/assets/images/factory.svg" alt="factory" width="380px"/>
</div>
