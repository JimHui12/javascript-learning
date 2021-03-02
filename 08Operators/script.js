const courses = [
    {
        name: "Complete JS learning",
        price: "2.3"
    },
    {
        name: "Complete Angular learning",
        price: "8.1"
    },
    {
        name: "Complete Vue learning",
        price: "5.9"
    },
    {
        name: "Complete HTML5 learning",
        price: "4.5"
    }
];

function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("p");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateLIST();
// window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b)=> a.price - b.price );
    generateLIST();
})