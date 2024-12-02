"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizzaBuilder = void 0;
var Pizza_1 = require("./Pizza");
var PepperoniPizzaBuilder = /** @class */ (function () {
    function PepperoniPizzaBuilder() {
        this.size = "média";
        this.dough = "tradicional";
        this.toppings = ["Queijo", "Pepperoni"];
    }
    PepperoniPizzaBuilder.prototype.reset = function () {
        this.size = "média";
        this.dough = "tradicional";
        this.toppings = ["Queijo", "Pepperoni"];
    };
    PepperoniPizzaBuilder.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    PepperoniPizzaBuilder.prototype.setDough = function (dough) {
        this.dough = dough;
        return this;
    };
    PepperoniPizzaBuilder.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
        return this;
    };
    PepperoniPizzaBuilder.prototype.getResult = function () {
        return new Pizza_1.Pizza(this.size, this.dough, this.toppings);
    };
    return PepperoniPizzaBuilder;
}());
exports.PepperoniPizzaBuilder = PepperoniPizzaBuilder;
