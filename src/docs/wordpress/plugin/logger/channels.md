The logger service allows the selection of the channel to log to (default: console):

The available channels are:

<table>
<thead>
<tr>
    <td><b>Channel</b></td>
    <td><b>Description</b></td>
</tr>
</thead>
<tbody>
<tr>
    <td>Console</td>
    <td>Default console logging.</td>
</tr>
<tr>
    <td>File</td>
    <td>Log to file.</td>
</tr>
<tr>
    <td>Slack</td>
    <td>Log to a slack channel.</td>
</tr>
</tbody>
</table>

<br>

To specify a log channel we chain the Log helper with the channel method.

```
use Core\Facade\Log;

class MyClass
{
    public function myMethod
    {
        //Log::channel('channelName');
        Log::channel('file')->info('some message', ['logger' => __CLASS__, ....])
    }
}
```

The registration in the log file will be

```
2021-03-31 16:25 > INFO > some message {"logger":"MyClass"}
```
