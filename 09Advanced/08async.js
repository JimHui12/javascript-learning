const uno = () => {
  // ES6
  console.log("I am One");
};

const dos = () => {
  // ES6
  setTimeout(() => {
      console.log("wooooo");
  }, 3000);
  console.log("I am two");
};

const tres = () => {
  // ES6
  console.log("I am three");
};

uno();
dos();
tres();
