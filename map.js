//map function
const Mynum=[1,2,2,5,2,5,25,2,52,52]
// const newNums=Mynum.map((num)=>num+10)//here we used to add 10 num for each element
// console.log(newNums)

//chaining metrhod
// let mynewNum=Mynum
//              .map((num)=> num*10)
//              .map((num)=> num+1 )
//              .filter((num)=>num>=40)
// console.log(mynewNum)    


//reduce method 

//accumulator--empty value
//intial value ein first time in accumulator

//const mytotal=Mynum.reduce(function (acc,curval){
   // console.log(`acc:${acc} and cuur valeu is ${curval}`)
   // return acc+curval;
//},0)
//console.log(mytotal)   //mposty;r used in shopping cart

//accumuator using arrow function'
const mytotal=Mynum.reduce((acc,curval) => {return acc+curval},0)//i in obj tehn it sshoudld be rtuen using return

console.log(mytotal)


const shoppingCart=[
    {
       itemNamw:"DataScuience",
       price:3999
    },
    {
       itemNamw:"cyber",
       price:9999
    },
    {
       itemNamw:"web dev",
       price:2999
    },
    {
       itemNamw:"App dev",
       price:7999
    },
    {
       itemNamw:"Block chain",
       price:3799
    },
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay)
