// Code hoisting in javascript

// var num = 2;

// function sayMe() {
//     console.log("Say me");
// }

// sayMe()

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper("a");


bigTipper("200");
var bigTipper = function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}




