function describe_cities(city, country) {
    if (country === void 0) { country = "Defualt Country"; }
    console.log(city + " is in " + country);
}
describe_cities("Karachi", "Pakistan");
describe_cities("Tokyo", "Japan");
describe_cities("Hyderabad", "India");
