let magician:string[]=["Harry potter","Harmione Granger","Ron Wesley","Albus Dumbledore"]
function make_great(magicianArray:string[]){
    for(let i=0;i<=magicianArray.length;i++){
        magician[i]="The Great "+ magicianArray[i];
    }
}


function show_magician (magicians:string[]){
magicians.forEach( element =>{
console.log(element)
})
}
make_great(magician)
show_magician(magician)
