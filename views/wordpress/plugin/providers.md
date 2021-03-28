### Service providers

Service providers are classes which are used to bind entities to the container.
They allow the packaging of a code or configurations that are reused regularly.
The bound entities could be services, initiated classes, arrays ... etc ...  
The entities will be resolved from the container by calling app('entity') or app()->get('entity');

#### Anatomy of a service provider

```
namespace Boilerplate\Providers;

use Core\Providers\AppServiceProvider;

class AnotherServiceProvider extends AppServiceProvider
{
	/**
	 * @var array
	 */
	protected $provides = [
		'entity',
	];

	/**
	 * Container registration method
	 */
	public function register()
	{

		$this->getContainer()->add('entity', 'value');
	}

```

The service provider 'provides' method declare in an array what it can provide. The 'provides' array lists the keys available in the container.
In addition it benefit from a register method where the function add binds an entity and its value to the container.


#### Examples of bindings

<b>Binding a class</b>  

```
namespace Boilerplate\Providers;

use Boilerplate\Controllers\ViewController;
use Core\Providers\AppServiceProvider;

class ViewServiceProvider extends AppServiceProvider
{
    /**
     * @var array
     */
    protected $provides = [
        'view',
    ];
        
    /**
     * Container registration method
     */
    public function register()
    {
        $this->getContainer()->add('view', fn () => new ViewController());
    }
}
```

The usage will be
```
app('view')->method();
```

<b>Binding a service</b>  

```
namespace Boilerplate\Providers;

use GuzzleHttp\Client;
use Core\Providers\AppServiceProvider;

class GuzzleServiceProvider extends AppServiceProvider

    /**
     * @var array
     */
    protected $provides = [
        'http',
    ];
    
    /**
     * Container registration method
     */
    public function register()
    {   
        $this->getContainer()->add('http', function() => {
            return new Client([
                'base_uri' => 'url_to_my_api',
                ... additional configs
            ]);
        });
    }
}
```

The usage will be
```
app('http')->get(....);
```
