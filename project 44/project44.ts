function make_sandwich (item:string[]){
    console.log("\nMaking your sandwich with: ")
    item.forEach(element => {console.log("-"+element)});
    console.log("Enjoy your sandwich\n ")

}
make_sandwich(["Ham","Cheese","Lettuce","Tomato"])
make_sandwich(["Ham","Lettuce","Tomato"])
make_sandwich(["Ham","Cheese","Tomato"])
