
/// <reference path = "./util.ts" />
namespace UsersUtils {
    export class Users extends Parent implements userType {
        getName(){
            return this.name
        }
    }
}

let u1 = new UsersUtils.Users()
u1.setName("bruice")
console.log(u1.getName())