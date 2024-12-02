import { PizzaBuilder } from './PizzaBuilder';
import { Pizza } from './Pizza';

export class PepperoniPizzaBuilder implements PizzaBuilder {
    private size: string = "média";
    private dough: string = "tradicional";
    private toppings: string[] = ["Queijo", "Pepperoni"];

    reset(): void {
        this.size = "média";
        this.dough = "tradicional";
        this.toppings = ["Queijo", "Pepperoni"];
    }

    setSize(size: string): this {
        this.size = size;
        return this;
    }

    setDough(dough: string): this {
        this.dough = dough;
        return this;
    }

    addTopping(topping: string): this {
        this.toppings.push(topping);
        return this;
    }

    getResult(): Pizza {
        return new Pizza(this.size, this.dough, this.toppings);
    }
}
