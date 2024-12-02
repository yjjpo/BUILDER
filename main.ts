import { PizzaDirector } from './src/PizzaDirector';
import { MargheritaPizzaBuilder } from './src/MargheritaPizzaBuilder';
import { PepperoniPizzaBuilder } from './src/PepperoniPizzaBuilder';
import { Pizza } from './src/Pizza';

const margheritaBuilder = new MargheritaPizzaBuilder();
const pizzaDirector = new PizzaDirector(margheritaBuilder);
const pizzaMargherita = pizzaDirector.makeMargheritaPizza();
console.log("Pizza Margherita:");
pizzaMargherita.display();

const pepperoniBuilder = new PepperoniPizzaBuilder();
const pizzaPepperoni = pizzaDirector.makePepperoniPizza();
console.log("\nPizza Pepperoni:");
pizzaPepperoni.display();

console.log("\nPizza Personalizada:");
const customPizza = new MargheritaPizzaBuilder();
customPizza.setSize('grande')
  .setDough('recheada')
  .addTopping('Queijo')
  .addTopping('Azeitonas')
  .addTopping('Cogumelos');
const pizzaPersonalizada = customPizza.getResult();
pizzaPersonalizada.display();
