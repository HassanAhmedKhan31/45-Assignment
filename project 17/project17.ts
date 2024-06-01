let names: string[] = ["Hassan", "Azlan", "Huzaifa"];
let absent = "Hassan"
let new_person= "Saad"
names[0]=new_person
for (let i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i]+"\nIt is our pleasure to invit you in our party"+"\nThank you\n");
}
console.log("Mr. "+ absent+" is not coming in the party ")

console.log("\nGood new! we have found a big table so we are inviting three more people\n")
names.unshift("Ashar")
names.splice(2,0,"Gazali Ali")
names.push("Abdullah")
for (let i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i]+"\nIt is our pleasure to invit you in our party"+"\nThank you\n");
}
console.log("Mr. "+ absent+" is not coming in the party ")

console.log("\nSorry we cannot arrage a big table so we are inviting only two people\n")
while(names.length>2){
    let remove_guest = names.pop()
    console.log("Sorry Mr. "+ remove_guest + " You are not invited")
}
for (let i = 0; i < names.length; i++) {
    console.log("Dear Mr." + names[i]+"\nIt is our pleasure to invit you in our party"+"\nThank you\n");
}
console.log("Mr. "+ absent+" is not coming in the party ")
names.splice(0,2)
console.log(names)