import { PizzaBuilder } from './PizzaBuilder';
import { Pizza } from './Pizza';

export class MargheritaPizzaBuilder implements PizzaBuilder {
  private size: string = '';
  private dough: string = '';
  private toppings: string[] = [];

  reset(): void {
    this.size = '';
    this.dough = '';
    this.toppings = [];
  }

  setSize(size: string): PizzaBuilder {
    this.size = size;
    return this;
  }

  setDough(dough: string): PizzaBuilder {
    this.dough = dough;
    return this;
  }

  addTopping(topping: string): PizzaBuilder {
    this.toppings.push(topping);
    return this;
  }

  getResult(): Pizza {
    return new Pizza(this.size, this.dough, this.toppings);
  }
}