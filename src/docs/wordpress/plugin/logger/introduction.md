The logger functionality is based on a PSR-3 interface. Logs can be save to a log file, emails and the database.
As a primary implementation we will limit the logging to a file.  

The implementation of the logger is based on the package monolog.  

Custom log levels are not supported. Only eight RFC 5424 levels are available.
The supported log levels / helpers are:

<table>
<thead>
<tr>
    <td><b>Helper</b></td>
    <td><b>Log level</b></td>
    <td><b>Description</b></td>
</tr>
</thead>
<tbody>
<tr>
    <td>debug</td>
    <td>DEBUG(100)</td>
    <td>Debug information.</td>
</tr>
<tr>
    <td>info</td>
    <td>INFO(200)</td>
    <td>General events.</td>
</tr>
<tr>
    <td>notice</td>
    <td>NOTICE(250)</td>
    <td>Significant events.</td>
</tr>
<tr>
    <td>warning</td>
    <td>WARNING(300)</td>
    <td>Exceptional occurences but not errors.</td>
</tr>
<tr>
    <td>error</td>
    <td>ERROR(400)</td>
    <td>Runtime errors which do not require immediate action.</td>
</tr>
<tr>
    <td>critical</td>
    <td>CRITICAL(500)</td>
    <td>Critical conditions.</td>
</tr>
<tr>
    <td>alert</td>
    <td>ALERT(550)</td>
    <td>Immediate action must be taken.</td>
</tr>
<tr>
    <td>emergency</td>
    <td>EMERGENCY(600)</td>
    <td>Sytem is unusable.</td>
</tr>
</tbody>
</table>

<br>

The usage of the logger will be as

```
use Core\Facade\Log;

class MyClass
{
    public function myMethod
    {
        //Log::helperMethod('message', [contextArray]);
        Log::info('some message', ['logger' => __CLASS__, ....])
    }
}
```

The registration in the log file will be

```
2021-03-31 16:25 > INFO > some message {"logger":"MyClass"}
```

The configuration file of the logger is at:

```
//Core > Config > log.php

[
	'defaultChannel' => 'console',
	'channels' => [
		'file' => [
			'dateFormat' => "Y-m-d H:i:s",
			'output' => "%datetime% > %level_name% > %message% %context% %extra%\n",
		],
		'slack' => [
			'dateFormat' => "Y-m-d H:i:s",
			'output' => "%datetime% > %level_name% > %message% %context% %extra%\n",
			'token' => 'xoxb-2883774866-2012686074454-laeDke1lOzZIA2J59FdTiUtv',
			'channel' => '#wordpressbot',
			'bot' => 'wpbot',
		]
	],
]
```
