// Array of favorite pizza names
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
console.log("\n");
// Print a sentence using the name of each pizza
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\n");
// Additional sentence expressing love for pizza
console.log("I really love pizza!");
