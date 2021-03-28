### Dependency injection

At it's core a container is simply a dependency injection. Binding entities to the container will allow passing them as dependencies in a constructor method.

```
class Controller
{
    /**
     * @var $model
     */
    public Model $model;

    /**
     * Construct.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }
}
```

#### Auto Wiring
By enabling the auto wiring the container can automatically resolve the classes/objects and all their dependencies. This is achievable by adding type hinting.

```
/**
 * Construct.
 *
 * @param ViewController $viewController
 */
public function __construct(ViewController $viewController)
{
    $this->viewController = $viewController;
}
```

The limitation of the auto wiring is that all injection should be objects.
The auto wiring is enabled when the container is delegated to the ReflectionContainer class.


