<?php

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

interface PhoneInterface
{
	public function setMake(string $make);

	public function setModel(string $model);

	public function setColor(string $color);

	public function setCapacity(string $capacity);
}

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
