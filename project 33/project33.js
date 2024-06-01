var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 1; i <= num.length; i++) {
    var ordinalnumber = void 0;
    if (i === 1) {
        ordinalnumber = "st";
    }
    else if (i === 1) {
        ordinalnumber = "st";
    }
    else if (i === 2) {
        ordinalnumber = "nd";
    }
    else if (i === 3) {
        ordinalnumber = "rd";
    }
    else {
        ordinalnumber = "th";
    }
    console.log(i + ordinalnumber);
}
