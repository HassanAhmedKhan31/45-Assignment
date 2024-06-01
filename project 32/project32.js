var current_user = ["HaSSan", "AzLan", "HuZAIfa", "GazALi ALi", "HaSan"];
var new_user = ["BiLal", "HaSSan", "SuBHan", "AzLan", "HaMza", "GazALi ALi"];
new_user.forEach(function (new_user_name) {
    var lowerCase = new_user_name.toLowerCase();
    if (current_user.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username " + new_user_name + " is not avarible. Please try another name ");
    }
    else {
        console.log("The username " + new_user_name + " is avarible");
    }
});
