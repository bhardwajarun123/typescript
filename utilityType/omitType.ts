
export{}

interface value {
     num1: number,
     num2: number,
     num3: number,
}


const myInfo:Omit<value, "num2" | "num3"> = {
    num1: 10
   
}
console.log(myInfo)