<?php
class InvokableClass 
{   
    private array $args;
    
    public function __construct(...$args)
    {
        $this->args = $args;
    }
    
    public function __invoke()
    {
        
      	$sum = 0;
      
      	foreach($this->args as $arg) {
         	$sum += $arg; 
        }  
      
      	echo $sum;
    }
}

function invoke()
{
    $args = func_get_args();

    $className = array_shift($args);

    return (new $className(...$args))();
}

invoke(InvokableClass::class, 1, 2, 6);