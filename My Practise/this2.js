/**
“this” is not bound
In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

There’s no syntax error in the following example:

function sayHi() {
  alert( this.name );
}

The value of this is evaluated during the run-time, depending on the context.

For instance, here the same function is assigned to two different objects and has different “this” in the calls.
 */

let user = {name: 'John'}
let admin = {name: 'Admin'}

function sayHi(){
    console.log(this.name)
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;


user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

//admin['f'](); 