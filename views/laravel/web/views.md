Blade is a simple yet powerfull templating engine. It allows fast development by offering directives, layout features and components.
It also allows the usage of plain php. The main feature of blade are:

#### Blade directives

@if, @foreach, @include and @php are an example of a long list of directive usefull to compose web pages and display data.
When needed Blade can be extended by adding custom directives.

#### Composition and inheritance
One of the most attractive features of blade is the views composition and inheritance. A general view layout can be defined as:

```
//layouts/main.blade.php

<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('includes.head')
    @yield('head')
</head>
<body>
<div class="super-container">
    <header>
        @include('includes.header')
        @yield('header')
    </header>
    <article>
        <div class="main-container">
            @yield('content')
        </div>
    </article>

    @yield('scripts')
    <footer>
        @include('includes.footer')
    </footer>
</div>
</body>
</html>
```

The layout blade file would include a header file and a footer file imported using the @include directive.
The @yield directive would be used to include optional content coming from a child view. It defines an optional section.

A child view would start by extending the layout file and optionally adding to its predefined sections by using the @section directive.

```
//pages/builder.php

@extends('layouts.main')

@section('head')
    //load additional assets
    <link href="{{ mix('/ccs/users.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/users.js') }}"></script>
@endsection

@section('content')
    // add html elements in the content section
@endsection
```

#### Blade components
Reusable class based components can be generated by issuing the console command
```
php artisan make:component Alert
```

The created component view will be placed in the resources/views/components directory.
A component class will be generated in the App/View/Components directory.

```
//App/View/Components/Alert.php

namespace App\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    
    public $type;
    
    public $message;

    public function __construct($type, $message)
    {
        $this->type = $type;
        $this->message = $message;
    }

    public function render()
    {
        return view('components.alert');
    }
}
```

The component view 

```
//resources/views/components/alert.blade.php

<div class="alert alert-{{ "{{ $type " }}}}">
    {{ "{{ $message " }}}}
</div>
```

To display a component, place the component tag in blade where the tag name starts with the string x- followed by the kebab case name of the component class:

```
<x-alert type="error" :message="$message"/>
```

Laravel's x-components support slots and scoped slots.

#### Reference
<p class="m-0 mb-05"><a class="link" href="https://laravel.com/docs/8.x/blade" target="_blank">Laravel blade</a></p>
