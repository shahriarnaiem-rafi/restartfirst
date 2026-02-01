function sum(a, b=0) {
    const total= a + b;
    // console.log(a,b,"Sum:" , total);

}
sum(10);
sum(10, 20);
function mul(num1, num2=1) {
    const total= num1 * num2;
    console.log(total);

}
mul(9,99);
 raf=true;
console.log(raf);

function fullname(first , last=0){
    const name=first+' '+ last;
    console.log(name);
}
fullname('shahriar');