this.a = 10;

function knowThis(global) {
    console.log(global);
}

knowThis(this)
console.log(this);
