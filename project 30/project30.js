var name1 = ["Admin", "Hassan", "Azlan", "Huzaifa", "Hamza", "Ali"];
for (var i = 0; i < name1.length; i++) {
    if (name1.includes("Admin")) {
        console.log("Hello Admin, would you like to see a status report");
    }
    else {
        console.log("Hello " + name1[i] + ", thank you for loging in again");
    }
}
