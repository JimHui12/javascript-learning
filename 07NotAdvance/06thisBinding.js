const hi = {
    firstName: "first",
    lastName: "last",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
            First name is ${this.firstName}
            last name is ${this.firstName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// hi.getInfo();
// dj.getInfo();

// var djInfo = hi.getInfo.bind(dj);
// djInfo();

hi.getInfo.call(dj);