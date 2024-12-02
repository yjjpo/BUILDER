import { MargheritaPizzaBuilder } from './src/MargheritaPizzaBuilder';
import { PepperoniPizzaBuilder } from './src/PepperoniPizzaBuilder';
import { PizzaDirector } from './src/PizzaDirector';

const margheritaBuilder = new MargheritaPizzaBuilder();
const pepperoniBuilder = new PepperoniPizzaBuilder();

const director = new PizzaDirector(margheritaBuilder);

const margheritaPizza = director.createMargheritaPizza();
console.log("Pizza Margherita:");
margheritaPizza.display();

console.log("\n");

director["builder"] = pepperoniBuilder;
const pepperoniPizza = director.createPepperoniPizza();
console.log("Pizza Pepperoni:");
pepperoniPizza.display();

console.log("\n");
const customPizza = new MargheritaPizzaBuilder()
    .setSize("grande")
    .setDough("recheada")
    .addTopping("Queijo")
    .addTopping("Azeitonas")
    .addTopping("Cogumelos")
    .getResult();

console.log("Pizza Personalizada:");
customPizza.display();
