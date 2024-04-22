
export {}


interface Vehicle {
    brand: string;
    model: string;
    year: number;
    start(): void;
  }
  
 
  class Car implements Vehicle {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`${this.brand} ${this.model} is starting...`);
    }
  }
  

  let myCar = new Car("Toyota", "Corolla", 2022);
  
  
  myCar.start();
  