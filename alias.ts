
// without using Alias

// let a: number | string | undefined = 10;
// let b: number | string | undefined = 20;
// let c: number | string | undefined = undefined;

// Using of Alias

type varType = number | string | undefined ;

let a: varType = 10;
let b: varType = 20;
let c: varType = undefined;