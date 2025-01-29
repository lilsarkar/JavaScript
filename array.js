
// const aar=[0,1,2,2,5,5,8,5,5,8,5,8]   //defining array
// //its is resizable
// //its always create a shallow copy who refer to same point
// //deep copy not share the same
// const hero=["Saad","daaadd","ims"]
const arr2= new Array(1,8,82,8,2,855,855)// u can define like that
// console.log(arr2[1])
// //methods of array
// arr2.push(88)  //its add the value at the alsst position
// arr2.push(555)
// arr2.pop()//its removed the last index
// console.log(arr2)

// arr2.unshift(9)//its add the value to first index
// console.log(arr2)

// arr2.shift()//its removed the first index
// console.log(arr2)

// console.log(arr2.includes(82))  //used to check the value 
// console.log(arr2)

// console.log(arr2.indexOf(82))
// console.log(arr2)

// const bewar=arr2.join()// here its change the value into string


// console.log(arr2)
// console.log(typeof bewar)

///slice ,splice
//slice 

// console.log("A",arr2)
// const my1=arr2.slice(1,3)  //Extracts a portion of an array without modifying the original array.
// console.log(my1)


// console.log("B",arr2)
// const my2=arr2.splice(1,3)//Adds, removes, or replaces elements in an array.
// //it change the array origiabnl

// console.log("c",arr2)
// console.log(my2)

const marvel_heroes=["ironman","hulk","witch"]
const dc=["flash","batman","superman"]
// marvel_heroes.push(dc)  ///here itrs concate the full aray bit it only one elemen
// console.log(marvel_heroes)

// console.log(marvel_heroes[3][1])//accesing the 3 element index 1

// const allhero=marvel_heroes.concat(dc)//concate and  push are same
// console.log(allhero)

const newhero=[...marvel_heroes,...dc]//here its spread all the value dot usally used to indicate spread 
//this is mainly used concat ethod

// console.log(newhero)
const newa=[1,5,52,[5,178,58,28,],8,[8,28,2,[858,4,42,4]]]
const realArr=newa.flat(Infinity)//used to flat only one in one array
console.log(realArr)

console.log(Array.isArray("saadullah"))//checking its array or not
console.log(Array.from("saadullah"))//converting alll the value in array

console.log(Array.isArray({name:"saadullah"}))//in this situation they return empty value bcz here its consfuse is i have to convert key or value


let score=100

let score1=100

let score2=100
console.log(Array.of(score,score1,score2))//used to convert into array 

