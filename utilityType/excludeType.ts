
export {}

type value = string | number | boolean;

const myValue:Exclude <value, string> = true

console.log(myValue)
