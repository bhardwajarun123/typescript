var Users = /** @class */ (function () {
    function Users() {
        this.name = "arun";
        this.email = "abc@gmail.com";
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is added");
    };
    return Users;
}());
var user1 = new Users;
var result = user1.addUser("arun");
console.log(result);
console.log(user1.name, user1.email);
