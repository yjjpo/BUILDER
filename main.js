"use strict";
// src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var PizzaDirector_1 = require("./src/PizzaDirector");
var MargheritaPizzaBuilder_1 = require("./src/MargheritaPizzaBuilder");
var PepperoniPizzaBuilder_1 = require("./src/PepperoniPizzaBuilder");
// Criação da pizza Margherita usando o Diretor
var margheritaBuilder = new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder();
var pizzaDirector = new PizzaDirector_1.PizzaDirector(margheritaBuilder);
var pizzaMargherita = pizzaDirector.makeMargheritaPizza();
console.log("\nPizza Margherita:");
pizzaMargherita.display();
// Criação da pizza Pepperoni usando o Diretor
var pepperoniBuilder = new PepperoniPizzaBuilder_1.PepperoniPizzaBuilder();
var pizzaPepperoni = pizzaDirector.makePepperoniPizza();
console.log("\nPizza Pepperoni:");
pizzaPepperoni.display();
// Criação da pizza personalizada diretamente pelo Builder
console.log("\nPizza Personalizada:");
var customPizza = new MargheritaPizzaBuilder_1.MargheritaPizzaBuilder(); // Criando a pizza personalizada diretamente
customPizza.setSize('grande')
    .setDough('recheada')
    .addTopping('Queijo')
    .addTopping('Azeitonas')
    .addTopping('Cogumelos');
var pizzaPersonalizada = customPizza.getResult();
pizzaPersonalizada.display(); // Exibir a pizza personalizada
