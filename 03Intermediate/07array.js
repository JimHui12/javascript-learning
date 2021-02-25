// var name;
// var name2;
// var name3;

var countries = ["China", "Japan", "USA", "Russia"];

var states = new Array("Guangdong", "Fujiang", "Guangxi", "Hebei");

console.log(states[1]);

console.log(states.length);
states[0] = "Hubei";
console.log(states);

var user = ["HUI", "HUI@gmail.com", 3, 34, true];
console.log(user);

user.pop(); //delete last element
//console.log(user);
user.unshift("New value");
//console.log(user);
user.shift();
//console.log(user);
console.log(user.indexOf("newyy"));

console.log(Array.from("HUI"));