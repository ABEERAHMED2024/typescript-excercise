let guests: string[] = ["kamran","danish","ibrahim"];

console.log("unfortunatily i can invite only two persons");
    
while (guests.length > 2){
    let removedguest = guests.pop();
    console.log(`sorry ${removedguest} i cant invite you to dinner`);

}
guests.forEach(guest=>{
    console.log(`${guest} you are still invited in dinner`);

})


