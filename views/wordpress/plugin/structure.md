### Structure

Mainly divided between the core files and the source files, the structure of the plugin boilerplate provides a total decoupling between the core files and the plugin development. 
The source files are where the plugin development reside. 
The core file are responsible for the boostraping of the plugin.

It all start with the boilerplate.php file.

```
/*
Plugin Name: Plugin boilerplate
Description: Custom plugin boilerplate.
Plugin URI:  https://crowdfavorite.com/
Author:      Crowd Favorite
Version:     1.0
License:     GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.txt
*/

defined('ABSPATH') || exit;

/*-- bootstrap --*/
require_once __DIR__ . '/core/bootstrap.php';

/*-- plugin controller --*/
app(\Boilerplate\Controllers\PluginController::class);
```

#### Core

At the root we need to require the boostrap.php file. 
The boostrap file loads the container, the core helper methods and the core service provider.
<br>

* Container
    * Container initiation class.
    * Setup of the paths (base path, config, providers...).
* Helpers
    * Core helper methods.
* Core Providers
    * Core service provider class.
      * Loads config files.
      * Loads custom service providers.
    * Additional core services can be added in this folder.
    
#### Config

The config folder includes php files which should return an associative array. 

```
//config/example.php

return [
    'mySetting' => 'myValue',
];
```

To retrieve a configuration key the helper method config can be used.
```
$mySetting = config('example.mySetting'); // returns myValue;
```

Any addition the config folder will be automatically pre-loaded in the container config entity.

#### Source

The source folder `src` is where the actual development happens. 
The structure of this folder is subject to change to suit the architectural design of the plugin.

* Helpers*
    * This is the placement of the custom helper methods needed for the plugin development.
    * <u>Loaded from the plugin composer.json file.</u>
    
```
//src/Helpers/funcs.php

if (!function_exists('myFunction'))
{
	function myfunction()
	{
		//
	}
}
```

* Providers*
    * This is the placement of the custom service providers.
    * A provider class should extend the AppServiceProvider core class.
    * The addition any provider class here will be automatically loaded by the core provider.
    * <u>Loaded by the CoreServiceProvider class.</u>  


* Controllers
    * The plugin main file boilerplate.php intiates the PluginController class located in the controllers folder.
  
```
app(PluginController::class);
```
    
* Views
    * An optional placement for html views.


* Resources**
    * js source files
    * sass source files  

\* cannot be moved or renamed without the modification of the core files.  
\** cannot to be moved or renamed without the modification of the Laravel mix config file.


