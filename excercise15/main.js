var guest = ["kamran", "danish", "ibrahim"];
var unableToattend = "kamran";
console.log("".concat(unableToattend, " cant make it to the dinner"));
var newGuest = "ahmed";
guest[guest.indexOf(unableToattend)] = newGuest;
guest.forEach(function (guest) {
    console.log("hello ".concat(guest, " would you like to dinner with me ? "));
});
