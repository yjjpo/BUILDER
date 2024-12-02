import { Pizza } from "./Pizza";

export interface PizzaBuilder {
    reset(): void;
    setSize(size: string): this;
    setDough(dough: string): this;
    addTopping(topping: string): this;
    getResult(): Pizza;
}
