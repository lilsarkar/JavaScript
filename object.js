//singleton=>if made from constructor its singleton

//object literls


//Object.create//this method is constructor method
//creating object

// const sym=Symbol("saad")
// const JUser={
//     name:"saad",
//     [sym]:"saad",
//     age:23,
//     location:"gadag",
//     isLoggedIn:false,
//     mail:"Saadullahmd15@gmail.com",
//     lastLoginDay:["monday","saturday"]
// }
// console.log(JUser.mail)//used to acces object
// console.log(JUser['mail'])//2nd method to acces obj3etc
// console.log(JUser[sym])
// console.log(typeof JUser[sym])

// JUser.mail="saadullah@md"//used to overwrite and changed the mail
// Object.freeze(JUser)//now we cant change and overwrite any value
// JUser.mail="saadullah@mdima"
// console.log(JUser)

// const User1= new Object();//singleton
// const user2={}//non singleton

// user2.id="123abc"
// user2.name="saad"
// user2.isLoggedIn=false
// console.log(user2)

// const reUse={
//     email:"saadulla@mail.co",
//     fullname:{
//         firstname:"saad",
//         lastname:"saad"
//     }
// }

// console.log(reUse.fullname.firstname)//here its prin fistr name  
// //we can create object in object
// const on1={1:"s",2:"a",3:"a",4:"d"}
// const on12={5:"u",6:"l",7:"l",8:"a"}
// // const on3=Object.assign({},on1, on12)//ist show and combine the value 
// // console.log(on3)

// const ib3={...on1,...on12}//mostly this is used 
// // reUse[1].email;
// console.log(Object.keys(reUse))
// console.log(Object.values(reUse))
// console.log(reUse.hasOwnProperty("email"))//usd to check

// reUse.greeting=function(){
//     console.log("hello js  user")
// }
// console.log(reUse.greeting)//here its return the function nt accesing the value
// reUse.greeting2=function(){
//     console.log(`hello js  user,${this.fullname}`)//acccesing the full name value
// }
// console.log(reUse.greeting2())

///////de-object---de-structureing object

const course={
    courseName:"js in hindi",
    price:999,
    teacher:"hitesh"
}
const {teacher:sir}=course//here we destructure the teacher and  can acces using sir
console.log(sir)

//Api--///
