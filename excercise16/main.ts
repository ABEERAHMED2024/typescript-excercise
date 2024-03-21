let guests: string[] = ["kamran","danish","ibrahim"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.push("ahmed");
guests.splice(guests.length / 2, 0, "bilal");
guests.push("mosa");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
