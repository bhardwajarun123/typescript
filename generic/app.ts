
// without using Generic 

// function users(data:Object):Object {
//     return data

// }

// console.log(users({name: "arun", age: 23}))

// using of generic

function users <T>(data:T):T {
    return data

}

console.log(users(5655))