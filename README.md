# Builder
Este projeto demonstra a implementação do padrão de projeto Builder para a criação de pizzas personalizadas. 
Utilizando o padrão Builder, é possível construir pizzas com diferentes tamanhos, tipos de massa e ingredientes de forma flexível e com código desacoplado.

# Componentes Principais:
Classe Pizza:
A classe Pizza representa o produto final, contendo os atributos:
Tamanho (pequena, média, grande)
Massa (tradicional, fina, recheada)
Ingredientes (opcionais, como queijo, tomate, pepperoni, etc.)
A classe Pizza também possui um método display() para exibir os detalhes da pizza.

Interface PizzaBuilder:
Define os métodos para construir as pizzas, incluindo:
reset(): Reseta o estado da construção.
setSize(size: string): Define o tamanho da pizza.
setDough(dough: string): Define o tipo de massa.
addTopping(topping: string): Adiciona um ingrediente.
getResult(): Retorna a pizza construída.

Builders Concretos:
MargheritaPizzaBuilder: Implementa a receita de uma pizza Margherita (tamanho grande, massa fina, ingredientes: queijo, tomate, manjericão).
PepperoniPizzaBuilder: Implementa a receita de uma pizza Pepperoni (tamanho médio, massa tradicional, ingredientes: queijo, pepperoni).

Classe PizzaDirector:
A classe PizzaDirector define as receitas predefinidas para a criação de pizzas, como Margherita e Pepperoni. O Diretor coordena o processo de construção, utilizando diferentes Builders para criar as pizzas.

Código Cliente (main.ts):
O código cliente testa a criação de pizzas predefinidas e pizzas personalizadas diretamente, sem a utilização do Diretor, mas apenas com Builders.


# Tecnologias Usadas:
TypeScript para implementação das classes e interfaces.

JavaScript para execução do código.
