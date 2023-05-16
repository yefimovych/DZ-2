/*
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
*/


/*let hours = prompt("Введіть кількість годин:");
let seconds = hours * 60 * 60;

alert(` ${hours} годин = ${seconds} секунд`);
*/

// let numb1 = prompt ('Введіть число:')
// let numb2 = prompt ('Введіть ще число:')
// let numb3 = prompt ('Введіть і ще число:')

// let sumOfnumb = (Number(numb1) + Number(numb2) + Number(numb3)) / 3

// alert (`середнє арифметичне ${sumOfnumb}`)

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
    
// switch (numOrStr) {
//     case null: 
//         console.log('ви скасували');
//     break;
//     case '': 
//         console.log('Empty String');
//     break;
//     case isNaN( +numOrStr ): 
//         console.log(' number is Ba_NaN');
//     break;
//     default: 
//         console.log('OK!');
// }


// const userYearBorn = prompt("Рік народження:")
// console.log(userYearBorn)
// const cityUser = prompt("В якому місті ти живеш?")
// console.log(cityUser)
// const sportUser = prompt("Який твій улюблений вид спорту?")
// console.log(sportUser)

// let userAge = 2023 - Number(userYearBorn)

// cityUser == "Київ"? 
//     alert ("Ти живеш у столиці України") : alert (`ти живеш у місті ${cityUser}`) ;
// cityUser == "Лондон"? 
//     alert ("Ти живеш у столиці Британії") : alert (`ти живеш у місті ${cityUser}`) ;
// cityUser == "Вашингтон"? 
//     alert ("Ти живеш у столиці США") : alert (`ти живеш у місті ${cityUser}`)


// const userYearBorn = prompt("Рік народження:")
//     console.log(userYearBorn)
// const cityUser = prompt("В якому місті ти живеш?")
//     console.log(cityUser)


//  let userAge = 2023-Number(userYearBorn)
//  console.log(userAge)

// cityUser === "Київ"? alert (`Тобі ${userAge} роки. Ти живеш у столиці України`) : 
// cityUser === "Лондон"? alert (`Тобі ${userAge} роки. Ти живеш у столиці Британії`) : 
// cityUser === "Вашингтон"? alert (`Тобі ${userAge} роки.Ти живеш у столиці США`) : alert ( `${userAge} ти живеш у місті ${cityUser}`)

// let userSport = prompt("Введіть ваш улюблений вид спорту:")
//     console.log(userSport)
// let champions = (userSport === "футбол") ? "Ліонелем Мессі" :
//     (userSport === "баскетбол") ? "Майкло Джо́рданом" :
//     (userSport === "теніс") ? "Роджером Федерером" : "";
// if (champions !== "") {
//     alert(champions ? "Круто! Хочеш стати " + champions + "?" : "Шкода, що Ви не захотіли ввести вид спорту.");
// } 
// else {
//     alert("Шкода, що Ви не захотіли ввести свої данні");
// } 

// let length = prompt("Введіть довжину масиву:");
// let arr = [];

// for (let i = 0; i < length; i++) {
//   let element = prompt(`Введіть елемент з індексом ${i}:`);
//   arr.push(element);
// }

// arr.sort();
// arr.splice(1, 4);

// console.log("Вміст масиву:", arr);

// let newNumber = ''; 
// for (let i = 10; i <= 20; i++) { newNumber += i + ', '; } 
// console.log(newNumber);
// for (let i = 10; i <= 20; i++) {
//   console.log(i * i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(7 * i);
// }
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   sum += i;
// }
// console.log(sum);
// let product = 1;
// for (let i = 15; i <= 35; i++) {
//   product *= i;
// }
// console.log(product);

// let sum2 = 0;
// for (let i = 1; i <= 500; i++) {
//   sum2+= i;
// }
// let average = sum2 / 500;
// console.log(average);
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
let positiveCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    positiveCount++;
  }
}
console.log('Сума позитивних елементів:', sum);
console.log('Кількість позитивних елементів:', positiveCount);


let minElement = array[0];
let minIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] < minElement) {
    minElement = array[i];
    minIndex = i;
  }
}
console.log('Мінімальний елемент:', minElement);
console.log('Порядковий номер мінімального елемента:', minIndex);


let maxElement = array[0];
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxIndex = i;
  }
}
console.log('Максимальний елемент:', maxElement);
console.log('Порядковий номер максимального елемента:', maxIndex);

let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}
console.log('Кількість негативних елементів:', negativeCount);

let product = 1;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    product *= array[i];
  }
}
console.log('Добуток позитивних елементів:', product);
