const myStates = [
  "Taiwan",
  "Guangdong",
  2021,
  "Shandong",
  "Guangxi",
  "Fujian",
  "Hunan",
];

var i = 0;

for (;;) {
    if(i > 3) break;
    console.log(i);
    i++;
}

myStates.forEach( (s) => {console.log(s)} );