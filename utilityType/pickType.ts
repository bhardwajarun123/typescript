
export{}

interface value {
     num1: number,
     num2: number,
     num3: number,
}


const myInfo:Pick<value, "num2" | "num3"> = {
    num2: 10,
    num3:30
   
}
console.log(myInfo)