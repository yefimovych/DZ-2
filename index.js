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

// const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// let sum = 0;
// let positiveCount = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     sum += array[i];
//     positiveCount++;
//   }
// }
// console.log('Сума позитивних елементів:', sum);
// console.log('Кількість позитивних елементів:', positiveCount);


// let minElement = array[0];
// let minIndex = 0;
// for (let i = 1; i < array.length; i++) {
//   if (array[i] < minElement) {
//     minElement = array[i];
//     minIndex = i;
//   }
// }
// console.log('Мінімальний елемент:', minElement);
// console.log('Порядковий номер мінімального елемента:', minIndex);


// let maxElement = array[0];
// let maxIndex = 0;
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > maxElement) {
//     maxElement = array[i];
//     maxIndex = i;
//   }
// }
// console.log('Максимальний елемент:', maxElement);
// console.log('Порядковий номер максимального елемента:', maxIndex);

// let negativeCount = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     negativeCount++;
//   }
// }
// console.log('Кількість негативних елементів:', negativeCount);

// let product = 1;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     product *= array[i];
//   }
// }
// console.log('Добуток позитивних елементів:', product);

// class Person {
//   constructor(name, gender) {
//     this.name = name;
//     this.gender = gender;
//   }
// }

// class Apartment {
//   constructor() {
//     this.residents = [];
//   }

//   addResident(person) {
//     this.residents.push(person);
//   }
// }

// class House {
//   constructor(maxApartments) {
//     this.apartments = [];
//     this.maxApartments = maxApartments;
//   }

//   addApartment(apartment) {
//     if (this.apartments.length < this.maxApartments) {
//       this.apartments.push(apartment);
//     } else {
//       console.log("Досягнуто максимальну кількість квартир у будинку.");
//     }
//   }
// }

// const person1 = new Person("John", "male");
// const person2 = new Person("Emily", "female");
// const person3 = new Person("Michael", "male");
// const person4 = new Person("Sophia", "female");

// const apartment1 = new Apartment();
// const apartment2 = new Apartment();

// apartment1.addResident(person1);
// apartment1.addResident(person2);
// apartment2.addResident(person3);
// apartment2.addResident(person4);

// const house = new House(2);

// house.addApartment(apartment1);
// house.addApartment(apartment2);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   displayInfo() {
//     console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
//   }
// }

// class Car {
//   constructor(brand, model, year, licensePlate) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.licensePlate = licensePlate;
//     this.owner = null;
//   }

// assignOwner(person) {
//   if (person.age > 18) {
//     this.owner = person;
//   } else {
//     console.log(`Власник повинен бути старше 18 років.`);
//   }
// }
// displayInfo() {
//   console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
//   if (this.owner) {
//     console.log(`Власник:`);
//     this.owner.displayInfo();
//   }
// }
// }
// const person1 = new Person("John", 26);
// const person2 = new Person("Emily", 18);
// const person3 = new Person("Michael", 33);

// const car1 = new Car("Toyota", "Camry", 2017, "AB1834cD");
// const car2 = new Car("Honda", "Civic", 2021, "EF5677GH");
// const car3 = new Car("Ford", "Mustang", 2019, "IJ9112lL");

// car1.assignOwner(person1);
// car2.assignOwner(person2);
// car3.assignOwner(person3);

// car1.displayInfo();
// console.log("--------");
// car2.displayInfo();
// console.log("--------");
// car3.displayInfo();
// console.log("--------");

function un (num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * un (num, degree - 1);
}

console.log(un(4, 7)); 
console.log(un(8, 1)); 
