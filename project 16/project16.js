var names = ["Hassan", "Azlan", "Huzaifa"];
var absent = "Hassan";
var new_person = "Saad";
names[0] = new_person;
for (var i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i] + "\nIt is our pleasure to invit you in our party" + "\nThank you\n");
}
console.log("Mr. " + absent + " is not coming in the party ");
console.log("\nGood new! we have found a big table so we are inviting three more people\n");
names.unshift("Ashar");
names.splice(2, 0, "Gazali Ali");
names.push("Abdullah");
for (var i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i] + "\nIt is our pleasure to invit you in our party" + "\nThank you\n");
}
console.log("Mr. " + absent + " is not coming in the party ");
