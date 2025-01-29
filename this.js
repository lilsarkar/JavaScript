// const user ={
//     username:'saad',
//     mail:"saadulahmd25@gmail.com",
//     welcomeMessage:function(){
//         console.log(`${this.username}`,"welcome to website")
//            console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="lilsarkar"
// user.welcomeMessage()
//console.log(this)//here the value is empyt object   if we run on browser its window 
// function chai (){     //if we run thi is function o many value come
//     usernae:"saad"
//     console.log(this)
//     console.log(this.usernae)//here it willl no show output bcz this only work in object not in function
// }
// chai()

// const chai =()=>{  //arrow function
//   let username="saad"
//   console.log(this)
// }

// chai()

const sum=(num1,num2)=>{   //basic arraow function
    return num1+num2
}
console.log(sum(85,852))


//const sum1= (num1,num2) => num1+num2//if wwee use curly braces its so must use return for the//this sis implicit arrow function
const sum1= (num1,num2) => ({username:"saad"})//here wehen we wrappig in oobject it shsould be wrapped in curly braces 
console.log(sum1(85,852))


