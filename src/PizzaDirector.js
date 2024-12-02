"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
var PizzaDirector = /** @class */ (function () {
    function PizzaDirector(builder) {
        this.builder = builder;
    }
    // Método que usa o builder para criar uma pizza Margherita
    PizzaDirector.prototype.makeMargheritaPizza = function () {
        this.builder.reset();
        return this.builder
            .setSize('grande')
            .setDough('fina')
            .addTopping('Queijo')
            .addTopping('Tomate')
            .addTopping('Manjericão')
            .getResult();
    };
    // Método que usa o builder para criar uma pizza Pepperoni
    PizzaDirector.prototype.makePepperoniPizza = function () {
        this.builder.reset();
        return this.builder
            .setSize('média')
            .setDough('tradicional')
            .addTopping('Queijo')
            .addTopping('Pepperoni')
            .getResult();
    };
    return PizzaDirector;
}());
exports.PizzaDirector = PizzaDirector;
