console.log("welcome to the javascript world");
/**
 * Varibale in Javascript
 * There are 2 types in Javascripts
 * 1.Primitive Data Types
 * =>string data type
 * =>number data type
 * =>boolean data type
 * =>null data type
 * =>undefined data type
 * =>symbol data type
 * =>bigint data type
 *  1.1 Primitive Data Types are immutable
 * ==================================================
 * 2.Reference Data Types/Non-Primitive Data Types
 * =>object data type
 * =>array data type
 * =>function data type
 * =>date data type
 * =>regex data type
 * =>map data type
 * =>set data type
 * 2.1 Reference Data Types are mutable
 */
//document.write("welcome to the javascript world");
//console.log("welcome to the javascript world");
//alert("welcome to the javascript world");
let name = "Rifat"; //string data type
var ageIs= 20; //number data type
let isMarried=true; //boolean data type
let address = null; //null data type    
let phone; //undefined data type
let symbol = Symbol("unique"); //symbol data type
let bigIntValue = BigInt(123456789012345678901234567890); //bigint data type
let person = { //object data type
    name: "Rifat",
    age: 20,
    isMarried: false
};
let numbers = [1, 2, 3, 4, 5]; //array data type
function greet() { //function data type
    console.log("Hello, World!");}
let today = new Date(); //date data type
let regex = /ab+c/; //regex data type
let map = new Map(); //map data type
let set = new Set(); //set data type
console.log("Name:", name);
let city=[
    "Dhaka","New Delhi","Uttar Pradesh","Kolkata",
    "Tripura","Guanzhou","Beijing","Nanjing","Tokyo","Osaka",
    "Kobe","Okinawa",,"Hiroshima",
]

const operator=(a,operator,b)=>{
 return eval(`${a} ${operator} ${b}`);
}
let add=operator(10,"+",20)
console.log(add)
let sub=operator(10,"-",20)
console.log(sub)
let mul=operator(10,"*",20)
console.log(mul)
let div=operator(10,"/",20) 
console.log(div)
let mod=operator(10,"%",20)
console.log(mod)
let exp=operator(10,"**",20)
console.log(exp)


//if else statement
let agee=50
if(agee<0){
    console.log("Age cannot be negative.");
}else if(agee>100){
    console.log("Age cannot be greater than 100.");
}
else{
    if(agee<18){
        console.log("you can not able to vote")
    }else if(agee>=18 && agee<25){
        console.log("You can vote and you are young")
    }else if(agee>=25 && agee<40){
            console.log("You can vote and you are in your prime age")
    }else if(agee>=40 && agee<50){
        console.log("You can vote and you are in your middle age")
    }else if(agee>=50 && agee<60){
        console.log("You can vote and you are in your late middle age")
    }else{
        console.log("You can vote and you are in your old age")
    }
}


let grade=(marks)=>{
    if(marks < 0 || marks > 100) {
        return "Invalid Marks";
    }
    switch(true){
        case (marks>=80 && marks<=100):
            marks="A+";
            break;
        case(marks>=70 && marks<=80):
            marks="A-"
            break;
        case (marks>=60 && marks<=70):
            marks="B+"
            break;
        case (marks>=50 && marks<=60):
            marks="B-"
            break;
        case (marks>=40 && marks<=50):
            marks="C+"
            break;
        case (marks>=33&& marks<=40):
            marks="D";
            break;
        default:
           return "F";
    }
    return marks;
}

console.log(grade(33))

//for loope
for (let i=0;i<city.length;i++){
    console.log(city[i]);
}
//for in loop
for (let i in city){
    console.log(city[i]);
}
const town={
    Dhaka: "Bangladesh",
    NewDelhi: "India",
    UttarPradesh: "India",
    Kolkata: "India",
    Tripura: "India",
    Guanzhou: "China",
    Beijing: "China",
    Nanjing: "China",
    Tokyo: "Japan",
    Osaka: "Japan",
    Kobe: "Japan",
    Okinawa: "Japan",
    Hiroshima: "Japan"
}

const down_town=[
    {"name": "Dhaka", "country": "Bangladesh"},
    {"name": "New Delhi", "country": "India"},  
    {"name": "Uttar Pradesh", "country": "India"},
    {"name": "Kolkata", "country": "India"},
    {"name": "Tripura", "country": "India"},
    {"name": "Guanzhou", "country": "China"},
    {"name": "Beijing", "country": "China"},
    {"name": "Nanjing", "country": "China"},
    {"name": "Tokyo", "country": "Japan"},
    {"name": "Osaka", "country": "Japan"},
    {"name": "Kobe", "country": "Japan"},
    {"name": "Okinawa", "country": "Japan"},
    {"name": "Hiroshima", "country": "Japan"}
]
//for of loop
for(let i of down_town.keys()){
    console.log(i, down_town[i].name, down_town[i].country);
}

for(let i of down_town.values()){
    console.log(i)
}



//forEach loope
//while loope
//do while loope
