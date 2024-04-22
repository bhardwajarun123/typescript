

class Person {
    name = "";

    setName(name:string){
        this.name = name
    }

    displayName(){
        console.log(this.name)
    }
}

let p1 = new Person()
p1.setName("arun")
p1.displayName()

p1.name = "bhardwaj"
p1.displayName()