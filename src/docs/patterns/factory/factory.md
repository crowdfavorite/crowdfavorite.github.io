### Refactoring
We will start with a controller which invokes a PaymentFactory class.


```
class PaymentController
{
    public function pay(string $paymentType)
    {
        $payment = (new PaymentFactory($paymentType))();
    
        return $payment->pay();
    }
}
```

<br>

The payment factory class will initiate the appropriate payment class based on the payment type request.

```
class PaymentFactory
{
    private string $paymentType;
    private array $paymentMethods = [
        'stripe' => StripePayment::class,
        'cash' => CashPayment::class,
    ];
    
    public function __construct(string $paymentType)
    {
        $this->paymentType = $paymentType;
    }
    
    public function __invoke()
    { 
        if (!in_array($this->paymentType, array_keys($this->paymentMethods))) {
            throw new \Exception("Payment method not supported");
        }
        
        $paymentClass = $this->paymentMethods[$this->paymentType];
        
        return new $paymentClass;
    }
}
```

Now for the implementation of the payment classes we will start by creating a PaymentInterface class.

```
interface PaymentInterface
{
    public function pay();
}
```

The stripe Payment class would be

```
class StripePayment implements PaymentInterface
{
    public function pay()
    {
        // Logic to pay with the stripe API...
    }
}
```

The cash on delivery class would be 

```
class CashPayment implements PaymentInterface
{
    public function pay()
    {
        // Process the cash on delivery payment method...
    }
}
```
