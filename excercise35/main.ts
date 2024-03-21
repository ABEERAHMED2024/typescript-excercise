// Array of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

console.log("\n");

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\n");

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet.");

