### Bootstrap

The bootstrapping of the plugin starts by initiating the DI container then attaching to it the entities needed to its functionality.
The container enables auto wiring responsible for the functioning of the automatic resolving of the classes. Following this we load the core helper methods and the CoreServiceProvider.
The CoreServiceProviders loads the config files in /config in the container and binds the addition custom providers added in the src/Providers folder.


A list of the bootstraping steps:
* Initiation of php .env.
* Requirement of the core helper methods.
* Creation of the constants (constants.php).
* Initiation of the PSR container.
* Binding of the CoreServiceProvider.

#### Initiation of the container

```
//Container.php

/**
 * Get the globally available instance of the container.
 *
 * @return static
 */
public static function getInstance()
{
    if (is_null(static::$instance)) {
        $container = new LeagueContainer();

        $container->delegate(
            new ReflectionContainer()
        );

        static::$instance = $container;
    }

    return static::$instance;
}
```

#### Core helper methods

<b>dd</b>  
The helper dd was adopted from the Laravel framework which is a shortcut for var_dump and then die.

```
dd('anything'); is equivalent to var_dump('anything'); die();
```
<b>env</b>  
Helper to retreive a defined parameter in the .env file.

```
env('PLUGIN_NAME'); //boilerplate
env('LOCALE', 'en'); //defaults to 'en' if 'LOCALE' is not defined in .env
```

<b>app</b>  
Helper to resolve the container or one of its entities;

```
app(); //resolves the container
app()->get('entity'); //get 'entity'
app()->add('entity'); //add 'entity' to the container
app('entity'); //get entity
```

<b>config</b>  
Helper to retrieve a config key from the config files. It uses the dot anotation to reach the required key.  

```
config('example.myKey'); //myValue as defined in example.php config file. 
```

<b>base_path</b>  
Returns the plugin root path.
```
base_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate
```

<b>config_path</b>  
Returns the plugin config folder path.
```
config_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate/config
```

<b>source_path</b>  
Returns the plugin source folder path.
```
source_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate/src
```


<b>invoke</b>  
Helper to invoke an action class. Read more about the invokable classes in the patterns section.
```
invoke(InvokableClass::class, $arg1, $arg2 ...); 
```
