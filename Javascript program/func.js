function A(n){
    if(n > 4){
        return n;
    }

    A(n++);
}

console.log(A(1));