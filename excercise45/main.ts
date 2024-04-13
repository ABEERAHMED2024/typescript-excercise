function make_car(manufcture:string,model:string, ...options:[string,string][]):object {
    let car = {manufcture,model};
    options.forEach(([key,value]) => car[key]= value);
    return(car);
}
console.log(make_car("toyota","corola",["color","red"],["year","2020"]));
console.log(make_car("ford","fiesta"),["color","blue"],["sunroof","true"]);
