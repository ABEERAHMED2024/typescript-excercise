function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, " shirt with the following message: \"").concat(message, "\"."));
}
// Calling the function with default values (large shirt with default message)
make_shirt();
// Calling the function with medium size and default message
make_shirt("medium");
// Calling the function with a different message
make_shirt("small", "Keep calm and code on!");
