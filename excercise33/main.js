// Array of numbers from 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print ordinal numbers
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}
