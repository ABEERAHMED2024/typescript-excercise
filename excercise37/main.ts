function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the following message: "${message}".`);
}

// Calling the function with default values (large shirt with default message)
make_shirt();

// Calling the function with medium size and default message
make_shirt("medium");

// Calling the function with a different message
make_shirt("small", "Keep calm and code on!");

