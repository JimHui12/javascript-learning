var user = {
    firstName : "someone",
    lastName: "someone elee",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn :true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
 