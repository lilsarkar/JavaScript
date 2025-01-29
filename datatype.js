// Primitive Data Type  is call by value
//7 category :string,Number,bolean,null,undefined,symbol=>is use to uniquw,BigInt
//
const score=100
const scoreValue=100.3
const isloggedIn=false
const OutsideTemp =null
let userEmail;
const id=Symbol('123')
const anoterId=Symbol('123')
console.log(id===anoterId)

const bigNumber=7418758585n// in end use to show big int


//refrence data typpe or Non primitive 
//array,objects,function

const hero=["shaktiman","iron","shak","superman"];
let Myobj={
    name3:"saad",
    age:23,
};

//fucntion declaring using variabble
 const myfunc=function(){
    console.log("saaad Hello")
 }
confirm.log(typeof bigNumber)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//stack (primitive ),Heap (Non primitive) 

//in stack we copy
///in heap we get refrence 
