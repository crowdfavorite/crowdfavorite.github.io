The Facade pattern is commonly used in PHP applications, where the facade classes simplify the work with complex libraries.
Facade can be recognized in a class that has a simple interface, but delegates most of the work to other classes.

To create a custom facade start by creating an empty class extending the core Facade class. 
The facade class can be places anywhere in the plugin src folders. However it is advisable to place it in the Facade folder.

```
//src/Facade/MyFacade.php

namespace Boilerplate\Facade;

use Core\App\Facade;

class MyFacade extends Facade
{
}
```

Then we need to bind the facade class to the container. When a facade is called we check its existence in the container instance.
If it exists we resolve its dependency. A custom service container should be created as

```
namespace Boilerplate\Providers;

use Boilerplate\Facade\MyFacade;
use Boilerplate\path to MyClass\MyClass;
use Core\Providers\AppServiceProvider;

class MyClassServiceProvider extends AppServiceProvider
{
	/**
	 * @var array
	 */
	protected $provides = [
		'MyFacade::class',
	];

	/**
	 * Container registration method
	 */
	public function register()
	{
		$this->getContainer()->add('MyFacade::class', () => new MyClass());
	}
}
```

As illustrated above a static call to MyFacade will resolve a new instance of MyClass. The usage will be as

```
use Boilerplate\Facade\MyFacade;

class SomeClass
{
    public function someMethod()
    {
        MyFacade::someMyClassMethod(); //equivalent to (new MyClass())->someMyClassMethod();
    }
}

```
