"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MargheritaPizzaBuilder_1 = require("./src/MargheritaPizzaBuilder");
var PepperoniPizzaBuilder_1 = require("./src/PepperoniPizzaBuilder");
var PizzaDirector_1 = require("./src/PizzaDirector");
var margheritaBuilder = new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder();
var pepperoniBuilder = new PepperoniPizzaBuilder_1.PepperoniPizzaBuilder();
var director = new PizzaDirector_1.PizzaDirector(margheritaBuilder);
var margheritaPizza = director.createMargheritaPizza();
console.log("Pizza Margherita:");
margheritaPizza.display();
console.log("\n");
director["builder"] = pepperoniBuilder;
var pepperoniPizza = director.createPepperoniPizza();
console.log("Pizza Pepperoni:");
pepperoniPizza.display();
console.log("\n");
var customPizza = new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder()
    .setSize("grande")
    .setDough("recheada")
    .addTopping("Queijo")
    .addTopping("Azeitonas")
    .addTopping("Cogumelos")
    .getResult();
console.log("Pizza Personalizada:");
customPizza.display();
