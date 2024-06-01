var names = ["Hassan", "Azlan", "Huzaifa"];
for (var i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i] + "\nIt is our pleasure to invit you in our party" + "\nThank you\n");
}
var absent = "Azlan";
var new_person = "Hasan";
names[1] = new_person;
for (var i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i] + "\nIt is our pleasure to invit you in our party" + "\nThank you\n");
}
console.log("Mr. " + absent + " is not coming in the party ");
