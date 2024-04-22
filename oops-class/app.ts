

class Users {
    name = "";
    email= ""

    addUser(user:string){
        return `${user} is added`
    }
}

let user1 = new Users;
let result = user1.addUser("arun")
console.log(result)
console.log(user1.name, user1.email)