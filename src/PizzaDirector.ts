import { PizzaBuilder } from './PizzaBuilder';
import { Pizza } from './Pizza';

export class PizzaDirector {
    private builder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.builder = builder;
    }

    createMargheritaPizza(): Pizza {
        this.builder.reset();
        return this.builder
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão")
            .getResult();
    }

    createPepperoniPizza(): Pizza {
        this.builder.reset();
        return this.builder
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni")
            .getResult();
    }
}
