PHP_CodeSniffer is a set of two PHP scripts; the main phpcs script that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard.

## Installation

The installation and configuration of the package are detailed below

### Composer
```
composer require --dev "squizlabs/php_codesniffer=*"
composer require --dev wp-coding-standards/wpcs
```
In composer.json the following script should be added 
```
"phpcs": "phpcs --standard=phpcs.xml"
```
And then run composer update.

To make CodeSniffer aware of the added coding standard, type on the console terminal 
```
vendor/bin/phpcs --config-set installed_paths vendor/wp-coding-standards/wpcs
```
### PhpStorm

In PhpStorm’s preferences php quality tools menu 
<br>
PhpStorm > Languages & Frameworks > PHP > Quality Tools
<br>
Point to  PHP CodeSniffer located at
<br>
vendor > squizlabs > php_codesniffer > bin > phpcs
<br>
Then click on the validate button.

Wordpress mainly follows PSR-12 however you can download a custom ruleset from
<br>
<p class="m-0 mb-05"><a class="link" href="/code/style/phpcs.xml" download="phpcs.xml">Wordpress preset</a></p>

In the php code sniffer inspection options choose custom as ruleset and point to the file phpcs.xml placed at the root of the project folder.


### References
<p class="m-0 mb-05"><a class="link" href="https://www.jetbrains.com/help/phpstorm/using-php-code-sniffer.html#enabling-tool-inspection" target="_blank">PhpStorm documentation</a></p>
<p class="m-0 mb-05"><a class="link" href="https://github.com/squizlabs/PHP_CodeSniffer" target="_blank">Code sniffer Github</a></p>
