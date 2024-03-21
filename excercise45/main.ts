function car_info(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    let car: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };

    // Adding additional options
    for (let option of options) {
        Object.assign(car, option);
    }

    return car;
}

// Call the function with required information and additional options
let car = car_info("Toyota", "Camry", { "color": "red" }, { "year": 2022 });

// Print the Object returned by the function
console.log(car);
