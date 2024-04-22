

class Fruit {
    private name = "";

    setName(name:string){
        this.name = name
    }

    displayName(){
        console.log(this.name)
    }
}

let f1 = new Fruit()
f1.setName("apple")
f1.displayName()

//f1.name = "mango"  // here we can't change name directly because we make the name is private only we can access within the class
f1.displayName()