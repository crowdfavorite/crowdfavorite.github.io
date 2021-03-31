The logger functionality is based on a PSR-3 interface. Logs can be save to a log file, emails and the database.
As a primary implementation we will limit the logging to a file.  

The implementation of the logger is based on the package monolog.  

The supported helpers are:

* debug
* info
* notice
* warning
* error
* critical
* alert
* emergency

<br>

The usage of the logger will be as

```
use Core\Facade\Log;

class MyClass
{
    public function myMethod
    {
        Log::info('some message', ['logger' => __CLASS__, ....])
    }
}
```

The registration in the log file will be

```
2021-03-31 16:25 > INFO > some message {"logger":"MyClass"}
```
