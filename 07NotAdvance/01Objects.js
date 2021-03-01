var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCoureCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var myname = User("myname", 2);

console.log(myname);