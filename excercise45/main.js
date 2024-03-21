function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        "manufacturer": manufacturer,
        "model": model
    };
    // Adding additional options
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        Object.assign(car, option);
    }
    return car;
}
// Call the function with required information and additional options
var car = car_info("Toyota", "Camry", { "color": "red" }, { "year": 2022 });
// Print the Object returned by the function
console.log(car);
