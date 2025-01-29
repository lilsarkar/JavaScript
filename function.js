
// function Myname(){ ///declaring funtion name
//     console.log("h")
//     console.log("h")
//     console.log("h")
//     console.log("h")
//     console.log("h")
//     console.log("h")
//     console.log("h")
     
// }
//Myname()

// function sum(num1,num2){            //num1=>parameter
//     console.log(num1+num2)
// // }
// sum(5,8) //3,5 is argument

// function sum(num1,num2){            //num1=>parameter
// let result =num1+num2
// return result
// }
// const result=sum(8,852)//here the result
// console.log("Result is ",result)

// function user(username="saad"){
//     if(user===undefined){
//         console.log("please enter the user name")
//         return
//     }
//     return`${username}just logged in`
// }
// console.log(user())//


function Calc(val1,vql2,...num1){// rest opeartor is dot
return num1;
}
console.log(Calc(200,200,4,2,555))

const user={
    name:"000aaas",
    agfe:28
}
function hob(anyobject){
    console.log(`name is ${anyobject.name}and age is ${anyobject.agfe}`)
}
// hob(user)//here is hsow the output
//array passing

const arr=[8553,85,8,58,28]//defining array 
function retunrse(getarray){//here  we create  a function for accesig the array 
    return getarray[1]
}
console.log(retunrse(arr))//accesing one value
