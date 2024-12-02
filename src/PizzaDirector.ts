import { PizzaBuilder } from './PizzaBuilder';
import { Pizza } from './Pizza';

export class PizzaDirector {
  private builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }

  // Método que usa o builder para criar uma pizza Margherita
  makeMargheritaPizza(): Pizza {
    this.builder.reset();
    return this.builder
      .setSize('grande')
      .setDough('fina')
      .addTopping('Queijo')
      .addTopping('Tomate')
      .addTopping('Manjericão')
      .getResult();
  }

  // Método que usa o builder para criar uma pizza Pepperoni
  makePepperoniPizza(): Pizza {
    this.builder.reset();
    return this.builder
      .setSize('média')
      .setDough('tradicional')
      .addTopping('Queijo')
      .addTopping('Pepperoni')
      .getResult();
  }
}
