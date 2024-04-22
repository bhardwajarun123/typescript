
export{}

// Required ----> it is used to make all optional propterties to required 

interface value {
    num1: number,
    num2: number,
    num3?: number,
}

// const myInfo:value = {
//     num1: 10,
//     num2: 20,
   
// }
// console.log(myInfo)


const myInfo:Required<value> = {
    num1: 10,
    num2: 20,
    num3:30
   
}
console.log(myInfo)