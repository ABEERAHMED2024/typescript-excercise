function make_car(manufcture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufcture: manufcture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return (car);
}
console.log(make_car("toyota", "corola", ["color", "red"], ["year", "2020"]));
console.log(make_car("ford", "fiesta"), ["color", "blue"], ["sunroof", "true"]);
