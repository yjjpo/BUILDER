import { PizzaBuilder } from './PizzaBuilder';
import { Pizza } from './Pizza';

export class MargheritaPizzaBuilder implements PizzaBuilder {
    private size: string = "grande";
    private dough: string = "fina";
    private toppings: string[] = ["Queijo", "Tomate", "Manjericão"];

    reset(): void {
        this.size = "grande";
        this.dough = "fina";
        this.toppings = ["Queijo", "Tomate", "Manjericão"];
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
