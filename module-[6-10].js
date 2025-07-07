console.log('welcome to the module-[6-10]')
let jobType="bcs"
let height="4.0"
let profession="doctor"
const salary=2500
if (salary>20000){
    console.log("good salary")
    if(salary>=20000 && (jobType=="bcs")){
        console.log("You are a good pattro")
    }
}else if(salary>=21000 && (height(parseFloat(height>=5.7)))){
    console.log("You are also a good pattro")
}else if(profession.toLowerCase()=="doctor" &&(parseFloat(height<5.00)) ||(height>5.5)){
  console.log("You are a great pattro")
}else if(profession.toLowerCase()=="teacher" && profession=="bcs"){
    console.log("Okk It will be ok")
}else{
    console.log("You are rejected ,go and study")
}



let price=5000
const discountCalculation=(price,dicount)=>{
  return price*dicount/100;
}

if(price>5000){
    const discount=discountCalculation(5000,10);
    const payAmount=price-discount
    console.log(payAmount)
}else if(price>2500){
    const discount=discountCalculation(price,5)
    const payAmount=price-discount;
    console.log(payAmount)
}
else{
    console.log(price)
}

const age=12;
if (age>12)console.log("free")
else if(age>=60){
    const discount=discountCalculation(price,50)
    const Pay=price-discount;
    console.log(Pay)
}else if(age>=50){
    const discount=discountCalculation(price,25)
    const Pay=price-discount
    console.log(Pay)
}
else{
    console.log("No discount")
}

const BMICalculation=(weight,height)=>{
    return weight/(height*height)
}
let rifat=BMICalculation(100,5.5)
console.log(rifat.toFixed(2))

if(rifat<18.5){
    console.log("Underweight")
}else if(rifat>=18.5 && rifat<=24.9){
    console.log("Normal weight")
}else if(rifat>=25.00 &&rifat<=29.9){
    console.log("Overweight")
}else{
    console.log("Obese")
}

const money=400;
if(money>300){
    console.log("you are rich")
}else{
    if (money<0){
        console.log("You are fakir")
    }
    else if(money>=100 && money<=200){
        console.log("poor")
    }else if(money>=200 && money<=300){
        console.log("aktu rich")
    }else{
        console.log("Please earn")
    }
}
//ternary operator
let Number=44
let r=Number%2==0 ?"Even":"Odd";
console.log(r)
let a=90
let b=67
let minIs=Math.min(a,b)?b:a
console.log(minIs)
let maxIs=Math.max(a,b)?a:b;
console.log(maxIs)

const veg = [
  { name: "Carrot", price: 1.2 },
  { name: "Potato", price: 0.8 },
  { name: "Tomato", price: 1.5 },
  { name: "Broccoli", price: 2.0 },
  { name: "Spinach", price: 1.0 }
];

let res=veg.filter(n=>n.price>1.5).length>0?veg.reduce((sum,s)=>{
 return sum+s.price
},0):veg.map(m=>m.name);

console.log(res)

//Logical Not
let IsMarried=true;
if(!IsMarried){
    console.log("You are not married")
}else{
    console.log("You are married")
}
//double Not

if(!IsMarried){
    console.log("You are not married")
}else if(!!IsMarried){
    console.log("You are married")
}


