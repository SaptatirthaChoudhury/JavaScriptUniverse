function sum(n)
{
    if(n == 0){
        return 0;
    }
    return n+sum(n-1);

}
let n = 6;
console.log(sum(n));