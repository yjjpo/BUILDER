"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MargheritaPizzaBuilder = void 0;
var Pizza_1 = require("./Pizza");
var MargheritaPizzaBuilder = /** @class */ (function () {
    function MargheritaPizzaBuilder() {
        this.size = "grande";
        this.dough = "fina";
        this.toppings = ["Queijo", "Tomate", "Manjericão"];
    }
    MargheritaPizzaBuilder.prototype.reset = function () {
        this.size = "grande";
        this.dough = "fina";
        this.toppings = ["Queijo", "Tomate", "Manjericão"];
    };
    MargheritaPizzaBuilder.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    MargheritaPizzaBuilder.prototype.setDough = function (dough) {
        this.dough = dough;
        return this;
    };
    MargheritaPizzaBuilder.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
        return this;
    };
    MargheritaPizzaBuilder.prototype.getResult = function () {
        return new Pizza_1.Pizza(this.size, this.dough, this.toppings);
    };
    return MargheritaPizzaBuilder;
}());
exports.MargheritaPizzaBuilder = MargheritaPizzaBuilder;
