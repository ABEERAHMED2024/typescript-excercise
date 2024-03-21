function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller"];

// Call the make_great function with a copy of the original array
let great_magicians: string[] = make_great([...magicians]);

// Show the original and modified arrays
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
