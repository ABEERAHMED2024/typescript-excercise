// Array of numbers from 1 to 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print ordinal numbers
for (let number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
