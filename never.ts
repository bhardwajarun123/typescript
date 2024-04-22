
// still this function is void type it also work when we used throw  
// function apiError(msg, code){
//     throw {message:msg, apiCode: code}
// }

// console.log(apiError("server side verror", 500))


// here we are using never for standard purpose in this code is going to break thats why it never return even undefined also


function apiError(msg, code):never{
    throw {message:msg, apiCode: code}
}

console.log(apiError("server side error", 500))
