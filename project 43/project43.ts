let magician:string[]=["Harry potter","Harmione Granger","Ron Wesley","Albus Dumbledore"]
function copyarray (arr:string[]){
    return [...arr]
}
function make_great(magicianArray:string[]){
    for(let i=0;i<=magicianArray.length;i++){
        magicianArray[i]="The Great "+ magicianArray[i];
    }
}
function show_magician (magicians:string[]){
magicians.forEach( element =>{
console.log(element)
})
}
let copyarrayname = copyarray(magician)
make_great(copyarrayname)
console.log("This is my original array");
show_magician(magician)
console.log("This is my modify array");
show_magician(copyarrayname)
