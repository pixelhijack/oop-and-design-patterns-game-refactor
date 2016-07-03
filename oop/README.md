# Object Oriented Programming

## General thoughts

### Objects

An Object in programming refers, mimics to real world "Objects".

An "Object" in real world has

* Properties
* Functionalities

```
Finger {
    properties:
        name
        length
        circumference
        curvature
    functionalities:
        bend
        unbend
}
```

An Object in programming has

* Properties
* Methods

### Object vs. Class

* **Class** is the blueprint of an Object
* **Object** is an instance of a Class

```JavaScript
var immediateInstance = {// Object instance
        "property": 123
    },
    clazz;

function Clazz() {// typeof Clazz => function
    // Class ~ blueprint
}

clazz = new Clazz();// typeof clazz => object
```

### Method vs. Function

* **Method** does something, operates on _its object__, may have arguments
* **Function** returns something, operates on its arguments, can stand on its own

```JavaScript
"use strict";

function Clazz() {

    var property;

    // method
    this.doSomething = function(/* may have arguments */) {
        // do something
    };

    // method
    this.answerSomething = function(/* may have arguments */) {
        // return something
    };
}

// function
function doSomething(argumentOne, argumentTwo) {
    // do something with arguments
}

// function
function answerSomething(argumentOne, argumentTwo) {
    // return something in the view of arguments
}
```

## Principles

### Encapsulation

* Data and operations on them are placed into the same class.

#### Responsibility-driven design

* Grouping data and operations on them according to their responsibility or concerns.

**Separation of Concerns**

#### Information hiding

* Data fields
* Difference between stored and derived data
* Internal structure of the Class
* Implementation details

#### Tight encapsulation

* Accessing fields, properties must be done by methods.

#### "Tell, don't ask"

* Tell objects what you want them to do
* Don't ask them about about their internal state, make decision and tell what to do

### Inheritance

* Hierarchical relationship of object
* Parent-Child relationship __(be careful!)__

#### What is inherited?

* Properties or methods according to the access modifier rule set.

__e.g., public, protected, private, package private, ...__

#### Taxonomy rule

Every heir must 
* introduce a feature
* redeclare an inherited feature
* add an invariant closure

__Taxonomy: the practice and science of classification of things or concepts, including the principles that underlie such classification__

### Polymorphism

* Static __(overload)__
* Dynamic __(override)__
* Type parametric

### Abstraction

* Separation of ideas, architecture from implementation
* Reduce duplication of information

## Object oriented relationships

* **Is-A** by sub-typing __(inheritance: be careful!)__
* **Has-A** by composition

### Composition

* **Association** works with it, operates on that __(e.g., delegation: be careful! mind the constructor)__ __(aircraft - circumstances)__
* **Aggregation** able to operate without, may replace dynamically __(airport - aircrafts)__
* **Composition** unable to operate without __(aircraft - wheels)__

### Law of Demeter

A method "M" of an object "O" should only invoke method of

* "O" itself,
* "M"'s parameters __(arguments)__,
* objects created within "M"
* fields in the scope of "O"

### Cohesion

* Measure of how closely all the responsibilities __(e.g., properties & methods of a class)__
* Good OO design is: high cohesion

### Coupling

* The extent to which one object depends on other(s) to achieve its goal.
* Good OO design: loose coupling

### Design by Contract

* Preconditions
* Post conditions
* Invariants

must be held.

__Any heir should honor the contract made by its ancestor.__

## SOLID Principles

### "S"ingle Responsibility

* A method, function or object does or must be responsible for one thing and only one thing and does it well.

### "O"pen-Close Principle

Be
* **open** for extension
* **close** for modification

### "L"iskov Substitution Principle

* Every ancestor must be replaceable by its heir without defects.

Constraints on sub-types

* method arguments must not be less general
* returned type must not be less specific
* new exception should not be thrown
* preconditions cannot be strengthened
* invariants must be preserved
* history: new method cannot change state

### "I"nterface Segregation Principle

* Use small, specific interfaces instead if big/fat one.

__(Separation of Concerns)__

### "D"ependency Inversion Principle

* Depend upon abstraction not concretion
* Abstraction should not depend on details

Inversion of Control __(IoC)__

Patterns, program design that implement IoC e.g.,

* Dependency Injection
* Service Locator

## Magic Mosaics

* **DRY** Don't Repeat Yourself
* **KISS** Keep it Simple Stupid
* **YAGNI** You Ain't Gonna Need It

## Final thoughts

Overall goal is

* increased maintainability
* decreased complexity