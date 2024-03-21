var guests = ["kamran", "danish", "ibrahim"];
console.log("unfortunatily i can invite only two persons");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry ".concat(removedguest, " i cant invite you to dinner"));
}
guests.forEach(function (guest) {
    console.log("".concat(guest, " you are still invited in dinner"));
});
