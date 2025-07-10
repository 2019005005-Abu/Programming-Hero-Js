console.log("Module-[20]")
const first_name='Abu Al Shahriar'
const last_name="Rifat"

const full_name=first_name.concat(last_name);
console.log(full_name)
console.log(first_name.length)
console.log(first_name.slice(0,4))
console.log(first_name.split(''))
console.log(first_name.substring(0,4))
console.log(first_name.trim())
console.log(first_name.replace('A','K'))
console.log(first_name)
console.log(first_name.toLowerCase())
console.log(first_name.toUpperCase())
console.log(first_name.at())
console.log(first_name.charAt('b'))
console.log(full_name.codePointAt('A'))
console.log(full_name.endsWith('t'))
console.log(full_name.includes('Abu'))
console.log(full_name.indexOf('b'))
console.log(full_name.localeCompare(last_name))
console.log(full_name.match(full_name))
if(last_name.match(/Rifat/)==true){
    console.log("Match")
}else{
    console.log("Not Match")
}

let my__name='/Rifat/'
if(my__name.match('/Rifat/')){
    console.log("Matching")
}else{
    console.log("Not matching")
}

if(full_name.localeCompare(full_name)==0){
    console.log('Names are equal')
}else{
    console.log('Names are different')
}

console.log(my__name.normalize())

let accepted='e'
let decomposed='e\u0301'
console.log(accepted===decomposed)
console.log(accepted.normalize()===decomposed.normalize())
let my__bsc_university= "   Sharda University"
console.log(my__bsc_university.trim())
console.log(my__bsc_university.length)
console.log(my__bsc_university.padEnd(25,'.').trim())
let w='hsgsfafaffffafhsgsfafaffffafhsgsfafaffffafhsgsfafaffffafhsgsfafaffffafhsgsfafaffffaf'

console.log(w.repeat('2'))
let a='Rifat'
console.log(a.repeat(3))
let full=`Rifat`
console.log(full.replace('R','K'))
console.log(full)
console.log(full.padStart(20))
console.log(Array.from(full).join('/'))
console.log(full.replaceAll('Rifat','Kifayat'))
console.log(full.search('R'))
console.log(full.includes('/R/'))
console.log(full.endsWith('t'))
console.log(full.search('R'))
if(full.search('R'==0) && full.includes('R')){
    console.log("OK")
}else{
    console.log("Not")
}
let L='   Rifat   '
console.log(L.trimEnd().trim())
for(let i=L.trim().length;i>=0;i--){
  console.log(L[i])
}

let f='dgdgdggdggd   '
let a1='  asggdgdgd'
console.log(f.length)
console.log(f.trimEnd().length)
console.log(f.trimEnd())
console.log("before",f.length)
console.log("after",f.trimStart().length)

let my_full_name='Abu Al Shahriar Rifat'
for(let i=0;i<my_full_name.length;i++){
    console.log(my_full_name[i])
}
console.log("=====================================================")
for(let i=my_full_name.length-1;i>=0;i--){
    console.log(my_full_name[i])
}
const reversing=(str)=>{
    return str.split('').reverse().join('')
}
var f_name=reversing('Rifat')
var f_name=reversing("Abu Al Shahriar Rifat")
console.log(f_name)
let r=''
for(let i of my__bsc_university){
    r=i+r;
}
console.log(r)
const sentence=`I am a full stack developer`
let l=''
for(let k of sentence){
    l=k+l
}
console.log(l)
console.log(my__bsc_university.valueOf().trim())
const subjects=['bangla','English','Physics','Math']


const my_obj = {
    fullName: "Abu Al Shahriar Rifat",
    age: 25,
    gender: "Male",
    nationality: "Bangladeshi",
    email: "rifat@example.com",
    phone: "+8801234567890",
    address: {
        street: "123 Main Street",
        city: "Dhaka",
        zip: "1207",
        country: "Bangladesh"
    },
    education: {
        bachelor: {
            university: "Sharda University",
            major: "Information Technology",
            graduationYear: 2022,
            GPA: "6.3/10"
        },
        master: {
            university: "Hohai University",
            major: "Transportation Engineering",
            graduationYear: 2024,
            GPA: "4.0/4.0"
        }
    },
    languages: ["English", "Bengali", "Chinese"],
    skills: ["JavaScript", "Python", "Machine Learning", "Computer Vision", "NLP"],
    publications: 2,
    isScholarshipHolder: false,
    hobbies: ["Reading", "Coding", "Photography"],
    socialLinks: {
        linkedIn: "https://linkedin.com/in/abu-rifat",
        github: "https://github.com/aburifat"
    }
};

(function(){
    console.log("This is a autonomus function")
})()//Immediately Invoked Function Expression (IIFE),

const counter=(function(){
let count=0;
return{
    increment:function(){
        return count++;
    },
    decrement:function(){
        return count--
    },
    reset:function(){
        count=0
    }
}
})()

console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())

counter.reset()
console.log(counter.increment())

//========================
const Mek=new Object()
console.log(typeof Mek)
Mek['name']="Abu Al Shahriar Rifat"
Mek.university="Hohai University",
Mek.Skilss=["ML Enginnering",'Software Engineer']
Mek.name='Shahriar'
console.log(Mek)
//==================================
//keys in Object
 let computer={
    brand:'lenovo',
    price:35000,
    processor:'intel',
    hdd:'1TB',
    result:['Science fair','Math']
 }
 console.log(computer)
console.log(Object.keys(computer))
for (let i in Object.keys(computer)){
    console.log(i)
}
console.log(computer.result[0])
console.log(computer.result[1])
console.log(computer['result'][0])
console.log(computer['brand'])
console.log(my_obj['education']['master']['graduationYear'])
 for (let i in my_obj){
    console.log(i)
    console.log(my_obj[i])
 }
//==================================
//values in Object
console.log(Object.values(computer))

//===================================

let keys=Object.keys(my_obj)
let values=Object.values(my_obj);
for(let key of keys){
    console.log(key)
}

for(let value of values){
    console.log(value)
}

const pen={
    brand:'econo',
    price:10,
    color:'black'
}
const pencil=new Object();
pencil.name="Pnecil-1"
pencil.height='1.3'
console.log(pencil)
const reubber=Object.create({})
reubber.name='Banbdg'
console.log(reubber.name.toUpperCase())

