"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
var PizzaDirector = /** @class */ (function () {
    function PizzaDirector(builder) {
        this.builder = builder;
    }
    PizzaDirector.prototype.createMargheritaPizza = function () {
        this.builder.reset();
        return this.builder
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão")
            .getResult();
    };
    PizzaDirector.prototype.createPepperoniPizza = function () {
        this.builder.reset();
        return this.builder
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni")
            .getResult();
    };
    return PizzaDirector;
}());
exports.PizzaDirector = PizzaDirector;
