console.log("Module-19")
const myArr=[
    "China",
    "Bangladesh",
    "japan",
    "India"
]
myArr.splice(3,1,"USA")
myArr.splice(4,0,'UK')
console.log(myArr)
const myName=Array.from("Abu Al Shahriar Rifat")
let s=myName.slice(0,4).join('/')
for (let i=0;i>s.length;i++){
    console.log(i)
}

const fruits=['orange','apple','banana','jackfruit','watermelon']
fruits.push('Sugar-cane');
fruits.push("Lichi")
fruits.unshift('Mango')
console.log(fruits)
console.log("Length of fruits is ",fruits.length)

class Student{
    constructor(Name,ID){
        this.Name=Name;
        this.ID=ID;
    }

    Home=()=>{
        console.log(`My name :${this.Name} ID:${this.ID}`)

    }
}

let stu=new Student("Rifat",2019005005);
stu.Home()

//looping
//for loope
for(let i=0;i<fruits.length;i++){
    console.log(i,'->',fruits[i])
}
//for in loope
for(let i in fruits.length){
     console.log(i,'->',fruits[i])
}
//forEach loope

//for of loope
for (let f of fruits)console.log(f)
//while loope
let i=0;
while(i>fruits.length){
    console.log(fruits[i])
    i++;
}
//do white loope
do{
    i++;
 console.log("using d while loope",i)

}while(i>fruits.length)

let f=fruits.forEach((f)=>f)

if( typeof f==='undefined'){
    let m=fruits.map((m)=>m)
   console.log(String(m))
   console.log(String(m.length))
   if(String(m.length)=='8'){
    console.log("Same")
    if(typeof m=== typeof 'string'){
        console.log("String TYpe")
    }else{
        console.log("Not String Type")
        if (typeof m=='string'){
            let S=String(m)
            console.log(S)
            if(typeof S ==='string'){
                console.log("Now String")
            }
        }
    }
   }else{
    console.log("Not Same")
   }
}

const SumIs=(Arr)=>{
    sum=0;
    for(let i=0;i<Arr.length;i++){
        sum+=Arr[i]
    }
    return sum;
    
}
var A=[1,2,3];
A=[10,20,45,87]
B=[...A]
let S1=SumIs(B);

console.log(S1)

let Reverse=(A)=>{
    for(let i=A.length;i>=1;i--){
        if(i==2){
            continue;
        }else{
            console.log(i)
        }
    }
}
Reverse(B);


for(let i=0;i<=100;i++){
    let sum_of_even=0
    let sum_of_odd=0;
    if (i%2==0){
        sum_of_even=sum_of_odd+i;
        if(sum_of_even%2==0){
            console.log("OK")
            if(!sum_of_even% 3==0){
                console.log("YES")
            }else{
                console.log("Not Ok")
            }
        }else{
            console.log("Not OK")
        }
    }else{
        sum_of_odd=sum_of_even+i
        if(sum_of_odd%2==0){
            console.log("OK")
        }else{
            console.log("Not Ok")
        }
    }
}

let n=0
while(n<15){
    n++;
    if(n%5 !==0){
        continue
    }else{
        console.log(n)
    }
}

const myOb={
    'name':'Abu Al Shahriar Rifat',
    'University':'Sharda University',
    'System_Id':'2019005005',
}

for(let i in myOb){
    console.log(i,':',myOb[i])
}
for (let i in Object.keys(myOb)){
    console.log(i)
}
for (let i in Object.values(myOb)){
    console.log(i)
}









