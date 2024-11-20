let a = 12;
let b = 16;
let c , d, count = 0;
while(a % 2 == 0 && b % 2 == 0)
{
        count = count + 2;
        c = a/2;
        d = b/2;

        a = c;
        b= d;
        if(a%2 != 0 || b%2 != 0)
        {
            break;
        }
      
}
 console.log(count*a*b);

 