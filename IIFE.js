///immediatlty invoked function expression (iife)
//used to soleve global scope prblm like inove fuucntion immeduailte execute the code


(function saad(){          ///name iifee
    console.log(`Sb connected `)


})();

( (name)=>{   //here we declare name //unname iifee
    console.log(`Sb connected ${name}`)//here we passsed the name 
}
)("saad")//IIFE // here we pass the name value 