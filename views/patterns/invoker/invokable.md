### Anatomy
The invokable class would benefit from a constructor to set its properties. 
The business logic would reside in the invoke method.
<br>
```
class InvokableClass 
{   
    private $arg1;
    private $arg2;
    
    public function __construct($arg1, $arg2, ...)
    {
        $this->arg1 = $arg1;
        $this->arg2 = $arg2;
    }
    
    public function __invoke()
    {
        .
        .
        .
    }
}
```

### Initiation

We would initiate the invokable class as

```
(new InvokableClass($arg1, $arg2))();
```

### The Invoke helper
An invoke helper method would speed up the development by initiating an invokable class and passing a number of arguments to it.

```
function invoke()
{
    $args = func_get_args();

    $className = array_shift($args);

    return (new $className(...$args))();
}
```

The first argument of the invoke helper should be the fully qualified class name, followed by the rest of the arguments.
A usage example of the invoke helper would be:

```
invoke(InvokableClass::class, $arg1, $arg2);
```
