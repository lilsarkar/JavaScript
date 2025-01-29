//for of  loop is array specific loop

let arr=[85,8,5,85,8,5]

for (const num of arr) {
    console.log(num)
    
}


const str="hello world"
for (const greet of str) {
    console.log(`each char is ${greet}`)
    
}

//maps
const map=new Map()
map.set('In',"India")
map.set("usa","america")
console.log(map)

for (const [ key ,value] of map) {
    console.log(key,'- ',value)
    
}