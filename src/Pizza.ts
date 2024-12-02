export class Pizza {
    private size: string;
    private dough: string;
    private toppings: string[];
  
    constructor(size: string, dough: string, toppings: string[]) {
      this.size = size;
      this.dough = dough;
      this.toppings = toppings;
    }
  
    display() {
      console.log(`Pizza ${this.size} | Massa: ${this.dough}`);
      console.log(`Ingredientes: ${this.toppings.join(', ')}`);
    }
  }
  