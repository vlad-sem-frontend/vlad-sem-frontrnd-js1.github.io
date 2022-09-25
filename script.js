//                  Task 1

let count=+prompt('Введи число...');
let fib = n =>{
   let a=1;
   let b=1;
   let c;
for(i=3;i<=n;i++){
c=a+b;
a=b;
b=c;
}
return c;
}
console.log(fib(count));

