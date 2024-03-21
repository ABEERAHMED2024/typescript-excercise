let guest: string[] = ["kamran","danish","ibrahim"];

let unableToattend = "kamran";
console.log(`${unableToattend} cant make it to the dinner`);

let newGuest = "ahmed";
guest[guest.indexOf(unableToattend)] = newGuest;

guest.forEach(guest=>{
    console.log(`hello ${guest} would you like to dinner with me ? `);

}); 
