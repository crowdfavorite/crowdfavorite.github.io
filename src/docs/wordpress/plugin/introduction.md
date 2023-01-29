### Introduction

A common design pattern for WordPress plugins is to have one “main class” that implements the singleton pattern.
The mail class loads all of the other classes the plugin needs. The singelton approach is a simple setup for small projects, however 
it becomes rapidly unmanageable as a project grows. The singleton “main class” needs to instantiate every one of those classes and store them in memory.

Example of the singleton setup.

```
//plugin.php
(new PluginController())::getInstance();
.
.
.

//PluginController.php
/**
 * Return an instance of Plugin.
 *
 * @access public
 * @static
 *
 * @return Plugin
 */
public static function getInstance()
{
    if (empty(self::$instance)) {
        self::$instance = new self;
    }

    return self::$instance;
}
```
<br>

The alternative would be to develop in a dependency injection container. A container will be providing:
* Lazy loading.
* Dependency injection.
* Container resolution.
* Code decoupling.
* Testable code.

Due to it's auto wiring capability, the container will be resolving all classes and their dependencies.

```
//plugin.php

app(PluginController::class);
```

app() is the helper method which resolves the container instance.





