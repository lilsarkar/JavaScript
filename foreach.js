// const coding=['py','cpp',"c#","js"] //higher ordder is for each
// coding.forEach(function (item){

//     console.log(item,)
// })


// ///fucnyiomn
// coding.forEach((item)=>{
//    // console.log(item)
// })

// //function pahle decalre kr k referenc e deke exevute krna
// function printME(item){
//     //console.log(item)

// }
// coding.forEach(printME)

// //used to print array by using for each array
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })

const my=[
    {
        langName:"java Script",
        langFileName:'js'
    },
    {
        langName:"python",
        langFileName:'py9'
    },
    {
        langName:"cpp",
        langFileName:'cpp'
    }

]

my.forEach( (item) =>{
    console.log(item.langName) 
})

//here we access value from arrary object using foreach value by using item and accesing teh value 