
// partial type ----> by using partial we make properties is optional


interface value {
    num1: number,
    num2: number
}

// const myInfo:value = {
//     num1: 10,
//     num2: 20,
// }
// console.log(myInfo)

const myInfo:Partial<value> = {
    num1: 10,
    
}
console.log(myInfo)