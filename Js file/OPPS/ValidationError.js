/*
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}
*/
// Usage 1
function test() {
    throw new ValidationError("Whoops!")
}
try {
    test()
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}
//____________________________________________________________

// Usage 2

function readUser(json) {
    let user = JSON.parse(json)

    if (!user.age) {
        throw new ValidationError("No field: age")
    }
    if (!user.name) {
        throw new ValidationError("No field: name")
    }

    return user
}

try {
    let user = readUser(`{"age": 25 , "name": "John"}`)
    console.log(user);
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(`Invalid data: ${err.message}`);
    } else if (err instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${err.message}`);
    } else {
        throw err;
    }
}
//________________________________________________________________
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(`No property: ${property}`)
        this.name = "PropertyRequiredError"
        this.property = property
    }
}

// Usage 3
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }

    return user;
}

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(`Error message : ${err.message}`);
        console.log(`Error name: ${err.name}`);
        console.log(`Error property: ${err.property}`);
    } else if (err instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${err.message}`);
    } else {
        throw err;
    }
}