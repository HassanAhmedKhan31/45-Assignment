let names: string[] = ["Hassan", "Azlan", "Huzaifa"];

for (let i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i]+"\nIt is our pleasure to invit you in our party"+"\nThank you\n");
}
let absent = "Azlan"
let new_person= "Hasan"
names[1]=new_person
for (let i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i]+"\nIt is our pleasure to invit you in our party"+"\nThank you\n");
}
console.log("Mr. "+ absent+" is not coming in the party ")