"use strict";

// alert("taskMin1")
// alert(`     Варіант функції №1
//     function showMessage() {
//     alert('Всім привіт!');
//     }
//             Варіант функції №2
//     let newFunction = function() {
//     alert('Всім привіт!');
//     }
//     newFunction();
//             Варіант функції №3
//     let newFunction = (width, height) => width * height
//     consol.log(newFunction(2, 5 ));
//     `)
// alert("taskMin2");
// let anyNumber = prompt("Скажи мені будь які цифри, а я виведу їх кількість на єкран за допомогою функції. Але ти цього не побачиш, бо функція працюе 'під капотом'")
// function anyNumberFromPrompt(a) {
//         return anyNumber.length
// }
// alert(`Друже, ти ввів "${anyNumber}"і там ${anyNumberFromPrompt()} символа, так-так я вже порахував.
//          Добре, поїхали далі`);
// alert("taskMin3");
// alert(`Ось така є функція:
//         function differenceOfNumbers(a, b) {
//         if (a < b) {
//                 return -1
//         };
//         if (a > b) {
//                 return 1
//         };
//         if (a == b) {
//                 return 0
//         };
// }
// console.log (differenceOfNumbers(a, b))`)
// function differenceOfNumbers(a, b) {
//         if (a < b) {
//                 return -1
//         };
//         if (a > b) {
//                 return 1
//         };
//         if (a == b) {
//                 return 0
//         };
// };
// console.log (differenceOfNumbers(a, b));
// alert("taskMin4");
// alert(`А ось функція, яка обчислює факторіал числа:
// function a (number) {
//         let result = 1;
//         for (let i = 1; i <= number; i++) {
//                 result*=i;
//         }
//         return result
// }
// console.log(a(10))`)
// function a (number) {
//         let result = 1;
//         for (let i = 1; i <= number; i++) {
//                 result*=i;
//         }
//         return result
// }
// console.log(a(number))
// alert("taskMin5");
// alert(`ОК, зараз я напишу функцію, яка приймає три окремі цифри і перетворює їх в одне число.
//                 function j(a, b, c) {
//                         let firstNum = a.toString();
//                         let secondNum = b.toString();
//                         let thirdNum = c.toString();
//                         let finalResult = firstNum + secondNum + thirdNum;
//                 return finalResult
//                 }
//                 console.log(j(a,b,c))`)
// function j(a, b, c) {
//         let firstNum = a.toString();
//         let secondNum = b.toString();
//         let thirdNum = c.toString();
//         let finalResult = firstNum + secondNum + thirdNum;
//         return finalResult
// }
// console.log(j(1,54,5))
// alert("taskMin6");
var lengthQuadro = prompt("Хей, Друже! Ти напевно скучив за Mною! Може й ні, але ми на це не будемо зважати. Тепер нам з топою треба порахувати площу прямокутника, і від тебе потрібна спочатку його ширина...");
var heightQuadro = prompt("і довжина ...");
var t = parseInt(lengthQuadro);
var g = parseInt(heightQuadro);

function areaQ(t, g) {
  var result = t * g;
  return result;

  if (number === falce) {
    alert("Ну миж домовлялися вводити число. Чому тобі так і хочется зробити навпаки? Єх...");
  }
}

alert("\u0417 \u0442\u043E\u0457 \u0456\u043D\u0444\u0438 \u0449\u043E \u0442\u0438 \u043C\u0435\u043D\u0456 \u0434\u0430\u0432 \u0448\u0438\u0440\u0438\u043D\u0430 \"".concat(lengthQuadro, "\" \u0456 \u0434\u043E\u0432\u0436\u0438\u043D\u0430 \"").concat(heightQuadro, "\", \u044F \u043C\u043E\u0436\u0443 \u0441\u0443\u0434\u0438\u0442\u0438, \u0430 JS \u043F\u043E\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438, \u0449\u043E \u043F\u043B\u043E\u0449\u0430 \u0431\u0443\u0434\u0435 \"\"").concat(areaQ(lengthQuadro, heightQuadro), "\"\", \u0441\u043F\u043E\u0434\u0456\u0432\u0430\u044E\u0441\u044C , \u0449\u043E \u0432\u0456\u0440\u043D\u043E")); // function areaQ(t, g) {
//         let result = t*g;
//         return result
// }
// console.log(areaQ(2,3))