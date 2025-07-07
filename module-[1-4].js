console.log("welcome to the module-[module-18]")
for(let i=0;i<=5;i++){
    console.log("I am a Machine Learning Engineer")
}

let myName="Abu Al Shahriar Rifat"
console.log(myName)
age=100;
// if (age<0 && age>100){
//     console.log("Could not be age")
//     return;
// }
if (age<0 || age>100){
    console.log("Not be age") 
    return;
}
if (age>1 && age>=10){
    console.log("child")
}else if(age>=11 && age<=17){
    console.log("Kid")
}
else if (age>=18 && age<=30){
    console.log("You are young")
}else if(age>=31 && age<=40){
    console.log("Mid")
}else if( age>=41 && age<=100){
    console.log("old")
}else{
    console.log("Unvalid")
}

//[Start from 5-10]
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", isActive: true }
];

var mappingIs=users.map(n=>n.name);
mappingIs=users.map(e=>e.email)
console.log(mappingIs)

var filtering=users.filter(f=>f.id>1)
console.log(filtering)

var including_with_filter=users.filter(n=>n.name.includes('o'))
console.log(including_with_filter)

var Finding=users.find(f=>f.email)
console.log(Finding)
 var ForEachis=users.forEach(f=>console.log(f))
