### How to build?
We will start with an abstract class which helps in setting and getting the builder properties.
Thanks to the php maginc method `__set`, the attributes of a build object will be stores in the `$attributes` array.
Following the gradual build up of an object we can return an object or an array representation of the built properties.

```
abstract class Builder
{
	protected array $attributes;

	public function __set($arg, $value)
	{
		$this->attributes[$arg] = $value;
	}

	public function first(): object
	{
		return (object) $this->attributes;
	}

	public function toArray(): array
	{
		return (array) $this->attributes;
	}
}
```

<br>

We will consider building phones where the main components are pre-defined in the interface below. 
To build a phone object we need to set the make, the model, the color and the capacity...etc...

```
interface PhoneInterface
{
	public function setMake(string $make);

	public function setModel(string $model);

	public function setColor(string $color);

	public function setCapacity(string $capacity);
}
```

Now it's time to put in place a phone builder class.

```
class PhoneBuilder extends Builder implements PhoneInterface
{
	public function setMake(string $make): self
	{
		$this->make = $make;

		return $this;
	}

	public function setModel(string $model): self
	{
		$this->model = $model;

		return $this;
	}

	public function setColor(string $color): self
	{
		$this->color = $color;

		return $this;
	}

	public function setCapacity(string $capacity): self
	{
		$this->capacity = $capacity;

		return $this;
	}
}
```

Finally we can start building phones.

```
 $phones[] = (new PhoneBuilder())
  	->setMake('Apple')
  	->setModel('iPhone 12')
	->setColor('gold')
	->setCapacity('128')
	->toArray();

$phones[] = (new PhoneBuilder())
  	->setMake('Samsung')
	->setModel('A7')
	->setColor('black')
	->setCapacity('64')
	->toArray();
```

The phones array will look like:

```
[
     [
       "make" => "Apple",
       "model" => "iPhone 12",
       "color" => "gold",
       "capacity" => "128",
     ],
     [
       "make" => "Samsung",
       "model" => "A7",
       "color" => "black",
       "capacity" => "64",
     ],
   ]
```

