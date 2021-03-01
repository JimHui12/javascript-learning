var User = function(firstName, courseCount) {
    this.firstName = firstName; // this point window/global object change to 
    this.courseCount = courseCount;
    this.getCoureCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is : ${this.firstName}`);
}

var myname = new User("myname", 2); // not a regular 
myname.getCoureCount();

if (myname.hasOwnProperty("firstName")) {
    myname.getFirstName();
}

//console.log(myname);

var sam = new User("Sam", 1);
//console.log(sam);
sam.getCoureCount();
sam.getFirstName();