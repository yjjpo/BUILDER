import { Pizza } from './Pizza';

export interface PizzaBuilder {
  reset(): void;
  setSize(size: string): PizzaBuilder;
  setDough(dough: string): PizzaBuilder;
  addTopping(topping: string): PizzaBuilder;
  getResult(): Pizza;
}