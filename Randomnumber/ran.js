
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));


const a = (Math.random() * (max - min + 1)) + min;


console.log(`Random value between ${min} and ${max} is ${a}`);
