let x_axis=Math.sinh(10)
/**
 * Variables in javascript
 */
let isMarried=true;
let age=30;
console.log(typeof isMarried)
console.log(typeof String(age))
console.log(typeof age)
let orangeprice=54.678;
console.log("orange price is "+orangeprice);
let applePrice='26.676';
let orangePrice=54.65;
console.log(typeof applePrice);
console.log(parseFloat(applePrice))
console.log(typeof parseFloat(applePrice))
applePrice=parseFloat(applePrice)
let totalPrice=applePrice+orangePrice;
console.log(totalPrice)


const oprerates=(a,op,b)=>{
    return eval(`${a} ${op} ${b}`)
}

let result=oprerates(10,'+',20);
result=oprerates(10,'-',20);
result=oprerates(10,'*',20);
result=oprerates(10,'/',20);    
console.log(result)