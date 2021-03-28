### Introduction
In object-oriented programing, the SOLID principle starts with an S which stands for the single responsibility principle. 
It is also refered to by the term sepration of concerns. The decoupling of the code would help in:

- An enhanced code maintainability.
- An easier code testing.
<br>
  
A class should delegate its dependencies to other classes, like delegating:

- DB queries.
- View generation.
- API requests.
- Data transformation.  
<br>

We would initiate a dependency class to help in the completion of the buisness logic.

```
class MainClass 
{
    
    public function mainMethod(array $args) 
    {
        .
        .
        .
        $response = (new TransformerClass())->transform($data);
    }
}
```

<br>

### Invocation

The term invocation (invoking a class) comes from the magic php invoke method.
```
class InvokableClass 
{
    public function __invoke()
    {
        .
        .
        .
    }
}
```

The invoke method is called when an instance of the invokable class is called as a method.

```
(new InvokableClass())(); //runs the __invoke method
```



