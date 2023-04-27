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


const userYearBorn = prompt("Рік народження:")
    console.log(userYearBorn)
const cityUser = prompt("В якому місті ти живеш?")
    console.log(cityUser)


 let userAge = 2023-Number(userYearBorn)
 console.log(userAge)

cityUser === "Київ"? alert (`Тобі ${userAge} роки. Ти живеш у столиці України`) : 
cityUser === "Лондон"? alert (`Тобі ${userAge} роки. Ти живеш у столиці Британії`) : 
cityUser === "Вашингтон"? alert (`Тобі ${userAge} роки.Ти живеш у столиці США`) : alert ( `${userAge} ти живеш у місті ${cityUser}`)

let userSport = prompt("Введіть ваш улюблений вид спорту:")
    console.log(userSport)
let champions = (userSport === "футбол") ? "Ліонелем Мессі" :
    (userSport === "баскетбол") ? "Майкло Джо́рданом" :
    (userSport === "теніс") ? "Роджером Федерером" : "";
if (champions !== "") {
    alert(champions ? "Круто! Хочеш стати " + champions + "?" : "Шкода, що Ви не захотіли ввести вид спорту.");
} 
else {
    alert("Шкода, що Ви не захотіли ввести свої данні");
} 
