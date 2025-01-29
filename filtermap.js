// const coding=['java','cpp','python','map']
// const values =coding.forEach( (item)=>
// {
//     console.log(item)
//     return item;
// })
// console.log(values)

const mNum=[1,2,5,2,5,25,2,5,2,5,2,8]
// const newnum=mNum.filter((num) => num>4)//here we accesing the value those are greater than 4
// console.log(newnum)


// const newNUM=[]
// mNum.forEach((num)=>{
//     if(num>4){
//         newNUM.push(num)
//     }

// })
// console.log(newNUM)/// both are sammme

const book=[
    {title:'book 1',genre:"fiction",publish:"1988"},
    {title:'book 2',genre:"non fiction",publish:"1982"},
    {title:'book 3',genre:"fiction scince",publish:"1990"},
    {title:'book 3',genre:"fiction h",publish:"1960"},
    {title:'book 4',genre:"fiction ",publish:"1988"},
    {title:'book 5',genre:"fiction ",publish:"1180"},
    {title:'book 6',genre:"fiction ",publish:"1950"},
    {title:'book 7',genre:"history",publish:"1950"},
    {title:'book 8',genre:"lang",publish:"2000"},
    {title:'book 9',genre:"poetry",publish:"1980"},
];

const userBooks= book.filter((bk)=> bk.genre=="history")//here we accesing the only one genre book
//console.log(userBooks)

const userbook=book.filter((bk)=>bk.publish >="1950" && bk.genre==='fiction') //here we filtering book based on publihing year
console.log(userbook)///using and operator to 
