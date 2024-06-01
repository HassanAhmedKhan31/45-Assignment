// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nam:string = "Hassan Ahmed Khan"
console.log(nam.toLowerCase())
console.log(nam.toUpperCase())
// Titlecase
let titlecaseName: string = nam.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log("Titlecase: " , titlecaseName);