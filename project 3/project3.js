// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nam = "Hassan Ahmed Khan";
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());
// Titlecase
var titlecaseName = nam.replace(/\w\S*/g, function (txt) {
    return txt.charAt(2).toUpperCase() + txt.substr(0).toLowerCase();
});
console.log("Titlecase: ", titlecaseName);
