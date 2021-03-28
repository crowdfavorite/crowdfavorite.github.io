<?php

interface PaymentInterface
{
    public function pay();
}

class StripePayment implements PaymentInterface
{
    public function pay()
    {
        echo 'stripe payment ...processing';
    }
}

class CashPayment implements PaymentInterface
{
    public function pay()
    {
        echo 'cash on delivery payment ...processing';
    }
}

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
        $paymentClass = null;

        if (!in_array($this->paymentType, array_keys($this->paymentMethods))) {
            throw new \Exception("Payment method not supported");
        }

        $paymentClass = $this->paymentMethods[$this->paymentType];

        return new $paymentClass;
    }
}

class PaymentController
{

    public function pay(string $paymentType)
    {
        $payment = (new PaymentFactory($paymentType))();

        return $payment->pay();
    }
}

//Testing
(new PaymentController())->pay('cash');