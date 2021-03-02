var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is : ${this.name}`);
    },
};

var hi = Object.create(User);

hi.name = "hi hi hi";
hi.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: {value: 3},
});

sam.getUserName();

