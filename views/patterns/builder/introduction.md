### Introduction
The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.  
<br>
The Builder pattern is useful for:
- The progressive construction of complex objects.
- The build up of composite objects with optional parameters.

<br>

### How it works?
- A director class initiates the request to build the object.
- A builder class learns how to build the object from an interface.
- A builder methods that returns the object.


<div class="flex items-center mt-2 p-3">
    <img src="/assets/images/builder.svg" alt="builder" width="680px"/>
</div>
