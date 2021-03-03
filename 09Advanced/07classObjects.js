// import User from "./06classjs";

const User = require("./06class.js");  // a few libraries support this

const hi = new User("hi", "hi@gmail.com");

console.log(hi.getInfo());
hi.enrollCourse("React.js");
hi.enrollCourse("Angular");

console.log(hi.getCourseList());

let courses = hi.getCourseList();

courses.forEach(c => console.log(c));

