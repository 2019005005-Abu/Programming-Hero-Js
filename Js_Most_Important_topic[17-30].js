console.log("welcome")
let myArr=[]
myArr.push(10)
myArr.push(20,"Rifat",true);
myArr.pop()
myArr.unshift(89)
myArr.unshift(36,90)
console.log("For loop ")
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i])
}
console.log("This is for in loop")
for (let i in myArr){
    console.log(myArr[i])
}
var veg=[
  { "name": "Carrot", "price": 1.2 },
  { "name": "Potato", "price": 0.8 },
  { "name": "Tomato", "price": 1.5 },
  { "name": "Broccoli", "price": 2.0 },
  { "name": "Spinach", "price": 1.0 },
  { "name": "Cucumber", "price": 1.3 },
  { "name": "Onion", "price": 0.9 },
  { "name": "Garlic", "price": 3.0 },
  { "name": "Cauliflower", "price": 2.2 },
  { "name": "Eggplant", "price": 1.8 }
]


const nameInfo=veg.map((n)=>n.name);
console.log(nameInfo)
const reduce=veg.reduce((sum,s)=>sum+s.price,0)
console.log(reduce)
const filteing=veg.filter((p)=>p.price>1.5)
console.log(filteing)
const finding=veg.find(f=>f.price>1.5)
console.log(finding)
var filtering_includes=veg.filter(n=>n.name.includes('Bro'))
filtering_includes=veg.filter(n=>n.name.includes('Egg'))
console.log(filtering_includes)

let a=[1,2,3,5,7,8];
let b=[5,6,7,8]
console.log(a.concat(b))
var myName="Abu Al Shahriar Rifat";
let TiltaleArray=Array.from(myName)
for (let i in TiltaleArray)console.log(TiltaleArray[i])
console.log([...a,...b]);
let a1=[35,56,8,24]
console.log(a1.indexOf(24))
console.log(a1.reverse());
const FindexinIndex=a1.find(a=>a>35)
console.log(FindexinIndex)

const reverseandSort=a1.sort((a,b)=>b-a);
const sorting=a1.sort((a,b)=>a-b);
console.log(reverseandSort)
const forEachIs=a1.forEach((a)=>console.log(a))
console.log(myName.slice(0,4))
console.log(myName.slice(0,6))
let slicing=Array.from(myName).slice(0,6)
console.log(slicing)
let splice=Array.from(myName).splice(0,5).concat(a)
console.log(splice)
 let c1=[...a1]
 console.log(c1)
 let RemoneBySplice=c1.splice(0,1)
 c1.splice(1,0,2)
 console.log(c1)
 //===========================================
 /**
  * String Method
  * 1.chartAt()
  * 2.concat()
  * 3.indexOf()
  * 4.lastIndexOf()
  * 5.replace()
  * 6.substr()
  * 
  */

 let Name="Abu Al Shahriar Rifat"
 let chat=Name.charAt(5)
 console.log(chat)
 let f='rifat'
 let l='shahriar'
console.log(f.concat(l))
console.log(l.lastIndexOf('r'))
console.log(f.replace('r','k'))
console.log(f.substr(0,4))
console.log(f.substring(0,2))








