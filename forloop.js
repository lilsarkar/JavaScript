//for 
for(let i=0;i<10;i++)
{
    const el=i;
    if(el==5)
    {
      //  console.log("5 is best ")
    }
    //console.log(el)
}

for(let i=0; i<=10;i++)
{
    //console.log(`inner loop values ${i}`);
    {
        for(let j=0; j<=10;j++)
        {
           // console.log(`outerer loop values ${j} and inner loop is ${i}`)
           //console.log(i +'*'+j+ ' = '+i*j)//table program 
        }
    }
}

let myarr=["flas","batman","superman"]
for (let i=0;i<=myarr.length;i++)
{
    const element=myarr[i]
    //console.log(element)
}

//break and continue
// for (let i = 0; i <=20; i++) {
//         if(i==5)
//         {
//         console.log("5 is bets")
//         break;
//         }
 
//         console.log(`value of of i is ${i}`)
//     }
for (let i = 0; i <=20; i++)
     {
        if(i==5)
        {
        console.log("5 is bets")
        continue;//used to skip 
        }
 
        console.log(`value of of i is ${i}`)
    }
    
