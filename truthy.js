const userEmail=""
if(userEmail){
    console.log("Got user email")
}else{
    console.log("dont get Got user email")
}

//falsy value
// false,o,-0,BigInt,null,undefined,nan,0n

//true values
//'0'   ,'false'," ",[],{},function(){}

// if(userEmail.length==0)
// {
//     console.log("array is empty")
// }

// const emptObj={}
// if(Object.keys(emptObj).length===0)
// {
//     console.log("object is empty");
// }


// /// nuliish coalescing opeartor (??);null undefined
 let val1;
// val1=5 ?? 10
// console.log(val1)
val1=null ?? 10 ?? 101
console.log(val1)

//terniary operator

const Tea=100
Tea<=80 ?console.log("less than 80"):console.log("more than 90")