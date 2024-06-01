var magician = ["Harry potter", "Harmione Granger", "Ron Wesley", "Albus Dumbledore"];
function make_great(magicianArray) {
    for (var i = 0; i <= magicianArray.length; i++) {
        magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
