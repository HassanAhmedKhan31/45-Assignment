function make_sandwich(item) {
    console.log("\nMaking your sandwich with: ");
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("Enjoy your sandwich\n ");
}
make_sandwich(["Ham", "Cheese", "Lettuce", "Tomato"]);
make_sandwich(["Ham", "Lettuce", "Tomato"]);
make_sandwich(["Ham", "Cheese", "Tomato"]);
