function make_shirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log('Creating a ' + size + '  with the message of ' + message);
}
make_shirts();
make_shirts("Medium", "I love python");
make_shirts("Small", "I love C language");
