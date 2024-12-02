"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(size, dough, toppings) {
        this.size = size;
        this.dough = dough;
        this.toppings = toppings;
    }
    Pizza.prototype.display = function () {
        console.log("Pizza ".concat(this.size, " | Massa: ").concat(this.dough));
        console.log("Ingredientes: ".concat(this.toppings.join(', ')));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
