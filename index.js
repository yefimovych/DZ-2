let num1 = prompt ("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

let sum = Number(num1) + Number(num2);
console.log(typeof num1 )
let minus = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(`${num1}+${num2}=${sum}\n
${num1}-${num2}=${minus}\n
${num1}*${num2}=${product}\n
${num1}/${num2}=${quotient}`);
