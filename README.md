# NodeJS Modules and Testing Intro

The agenda for today is as follows:

1. Intro to NPM
2. Intro to Testing Theory
3. Code Example using modules and TDD Development

## Intro to NPM

As applications become more complex we as developers need to better
organize our code. Frankly computers don't really care about
readability but we sure do. All the machine cares about is loading
dependencies in the proper order.

The easiest way to organize code is to divide it into many seperate
files which we call modules. This allows us to seperate concerns
between different functions/modules. It also allows us to re-use code
that either we or others have created. We are going to call this code
_libraries_.

When Javascript was only on the client (ie browser) we had to manually
specify the order in which our modules were loaded. In addition to
that we had to use *global* variables which is very much an
**antipattern**.

Luckily for **NodeJS** Serverside JS they introduce a **better**
package manager that would properly encapsulate our libraries and
avoid global variables. NodeJS also include a package manager called
**NPM** that easily allows us to use other peoples code and share our
code with others.

### How to use NPM

Every NodeJS project has a special file called **packages.json** that
lists in addition to information about the project itself also
includes our **dependencies** and **development dependencies**.

To create a new project just do:

``` shell
npm init
```

If you are checking out the project for the first time

``` shell
npm install
```

To add a dependency to a project:

``` shell
npm install --save <package name> [<package version>]
```

Add a development dependency

``` shell
npm install --save-dev <package name> [<package version>]
```

For more information and the *official* tutorial checkout (https://docs.npmjs.com/)

### Using a Module (Either part of a Package or One We Created)

To create the module you need to:

1. Put your code in a seperate file
2. At some point include **modules.export = ...** to choose what you
   want to export.

``` javascript
var myLibrary = {...};

module.exports = myLibrary;
```

To include you modules in another file/module:

``` javascript
var myCode = require('LOCATION OR NAME OF NPM PACKAGE')

myCode.run()
```

## Intro to Testing Theory

We as developers are constantly need to adapt to changes in our
project. In order to make this easy for ourselves and to ensure our
applications continue to work correctly we need to **test**.

We can't be efficient manually testing our code so we need to automate
our test suite. The two most popular libraries for testing JS code
are [Mocha](https://mochajs.org/)
and [Jasmine](https://jasmine.github.io/). We also highly recommend
that you use the [ChaiJS](http://chaijs.com/) assertion library.

In class we discussed the different types of testing in addition to
what we call the testing pyramid.

![Testing Pyramid](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)

You can find more information here:

* (https://mochajs.org)
* (https://jasmine.github.io/)
* (https://chaijs.com)
* (https://martinfowler.com/bliki/TestPyramid.html)
* (http://softwaretestingfundamentals.com/unit-testing/)

## Code Demo

You can find the code demo from class (and this readme) at (https://github.com/rob0t7/lhl-testing)

To run the project:

``` shell
npm install
npm test
```
