let number=[1,2,3,3,4,5]
let NameIs=["Rifat","Shahriar","Kifayet"]
let IsMarried=[true,true,false]
let MixedArr=[1,2,3,"Rifat",true]

console.log(number.length)
console.log(NameIs.length)
console.log(IsMarried.length)
console.log(MixedArr.length)

const Customizelength=(ArrayIs)=>{
    let count=0;
    for(let i=0;i<ArrayIs.length;i++){
        count++;
    }
    return count
}
let A=Customizelength(number);
console.log("coustomize-length",A);
MixedArr[2]=100;
console.log(...MixedArr)

let makeArr=new Array()
makeArr.push(10)
makeArr.push(200)
makeArr.push(34)
makeArr.push(78)
makeArr.push(23)
makeArr.push(100)
makeArr.push(45)
makeArr.unshift(200)
makeArr.unshift(1)
console.log(makeArr)
let country=['Canada','Canbera','USA','India','Japan']
console.log(country.includes('Canada'))
if (country.includes('USA')&& country.find((f)=>f.includes('U'))){
    console.log("YES")
}else{
    console.log("NO")
}

console.log(country.indexOf('USA'))
console.log(country.lastIndexOf('Canada'))
if(Array.isArray(country) && typeof (country)){
    console.log("This is Array")
}else{
    console.log("This is not Array")
}
let Name="Abu Al Shahriar Rifat"
//splice
let str_arr=Array.from(Name)
console.log(str_arr.length)
//slice
console.log(Name.slice(0,4))
console.log(Name.split(""))
console.log(str_arr.splice(2,1,'m'))
let i=Array.from('Hello')
let s=i.splice(0,1,'M')
console.log(s)
console.log(i)
console.log(i.join('/'))
