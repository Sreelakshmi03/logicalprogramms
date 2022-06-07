// fabinocci series
var num = parseInt(prompt('enter your number'));
let n1 = 0;
let n2 = 1;
var nextterm;

for (let i = 1; i < num; i++)
{
    console.log(n1);
    nextterm = n1 + n2;
    n1 = n2;
    n2 = nextterm;
}