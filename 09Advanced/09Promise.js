const uno = () => {
  // ES6
  return "I am One";
};

//   const dos = () => {
//     // ES6
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);

//   };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am two")
    }, 3000);
  });
};

const tres = () => {
  // ES6
  return "I am three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
