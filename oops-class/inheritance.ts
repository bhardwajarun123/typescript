
export {}

class CreateAccount {
    makeEmail(user:string) {
        return `${user}@test.com`
    }
}

class Users extends CreateAccount {
    addUser(user:string) {
        return `${user} added as an user`
    }
}

const u1 = new Users()
console.log(u1.addUser("arun bhardwaj"))
console.log(u1.makeEmail("arun"))

class Employees extends CreateAccount {
    addEmployee(emp:string) {
        return `${emp} is added as an employee`
    }
}

const e1 = new Employees()
console.log(e1.addEmployee("sam"))
console.log(e1.makeEmail("sam"))