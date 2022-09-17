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
// let lengthQuadro = prompt("Хей, Друже! Ти напевно скучив за Mною! Може й ні, але ми на це не будемо зважати. Тепер нам з топою треба порахувати площу прямокутника, і від тебе потрібна спочатку його ширина...")
// let heightQuadro = prompt("і довжина ...")
// let t = parseInt(lengthQuadro);
// let g = parseInt(heightQuadro);
// function areaQ(t, g) {
//         let result = t * g;
//         return result
//         if (number === falce) {
//                 alert("Ну миж домовлялися вводити число. Чому тобі так і хочется зробити навпаки? Єх...")
//   }
// }
// alert(`З тої інфи що ти мені дав ширина "${lengthQuadro}" і довжина "${heightQuadro}", я можу судити, а JS порахувати, що площа буде ""${areaQ(lengthQuadro,heightQuadro)}"", сподіваюсь , що вірно`)
// function areaQ(t, g) {
//         let result = t*g;
//         return result
// }
// console.log(areaQ(2,3))
// alert("taskNorm1");
var perfectNum = prompt('Ух, Друже. Ми перейшли на інший рівень, де зовсім інші задачі. Нам треба знайти “досконале число”, (Досконале число - це число, яке дорівнює сумі всіх своїх дільників). Так от, вводи число, а я тобі скажу, досконале воно чи ні. Поїхали ... ');

function seachNum(perfectNum) {
  perfectNum = parseInt(perfectNum);
  var result = 0;

  for (var i = 1; i < perfectNum; i++) {
    if (perfectNum % i === 0) {
      result = result + i;
    }
  }

  return perfectNum === result ? alert("\u0427\u0438\u0441\u043B\u043E ".concat(perfectNum, ", \u0414\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E.\n                \u0411\u043B\u0456\u043D, \u0442\u0440\u0435\u0431\u0430 \u0431\u0443\u043B\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u0438 \u0443\u043C\u043E\u0432\u0443 \u0437 \u0443\u0440\u043E\u043A\u0443 \u0434\u0435 \u0442\u0438 \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0432 \u044F\u043A \u0440\u043E\u0431\u0438\u0442\u0438 \u0446\u044E \u0437\u0430\u0434\u0430\u0447\u044E, \u044F \u0432\u0438\u0442\u0440\u0430\u0442\u0438\u0432 \u043D\u0430 \u043D\u0435\u0457 \u0431\u0456\u043B\u044C\u0448\u0435 \u0433\u043E\u0434\u0438\u043D\u0438 \u0456 \u043D\u0430\u0432\u0456\u0442\u044C \u043D\u0435 \u0437\u043D\u0430\u044E, \u0449\u043E \u0440\u043E\u0431\u0438\u0432 \u043D\u0435 \u0442\u0430\u043A. \u0411\u043E \u043F\u0435\u0440\u0435\u0440\u043E\u0431\u043B\u044F\u0432 \u0457\u0457 \u0456 \u043F\u0435\u0440\u0435\u0440\u043E\u0431\u043B\u044F\u0432, \u0456 \u0432 \u043A\u0456\u043D\u0446\u0456 \u0432\u043E\u043D\u0430 \u0442\u0430\u043A\u0430 \u0436 \u0441\u0430\u043C\u0430 \u044F\u043A \u0442\u0432\u043E\u044F. \u0416\u0430\u0445.\n                \u041F\u0440\u043E\u0431\u0430\u0447, \u043D\u0435 \u0432\u0442\u0440\u0438\u043C\u0430\u0432\u0441\u044F.\n        \u0413\u0430\u0440\u0430\u0437\u0434 \u043F\u043E\u0457\u0445\u0430\u043B\u0438 \u0434\u0430\u043B\u0456")) : alert("\u0427\u0438\u0441\u043B\u043E ".concat(perfectNum, ", \u043D\u0435 \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C \u0447\u0438\u0441\u043B\u043E\u043C. \u0413\u0430\u0440\u0430\u0437\u0434 \u043F\u043E\u0457\u0445\u0430\u043B\u0438 \u0434\u0430\u043B\u0456"));
}

console.log(seachNum(perfectNum)); // alert("taskNorm2");

var oneNum = +prompt('Нарешті ми підійшли до кінця домашки. Ну, що, Друже. Все як завжди, кажи спочатку перше число, а потім друге. А я виведу тобі на єкран всі досконалі числа в цьому діапазоні. Згоден? Тоді почали, пеше число буде ... ');
var twoNum = +prompt("Друге число буде ... ");

function findNum(oneNum, twoNum) {
  var result = 0;

  for (var i = oneNum; i <= twoNum; i++) {
    seachNum(i);
  }

  return result;
}

console.log(findNum(oneNum, twoNum));
alert("\u0422\u0438 \u0432\u0432\u0456\u0432 \u0447\u0438\u0441\u043B\u043E \"".concat(oneNum, "\" \u0456 \u0447\u0438\u0441\u043B\u043E \"").concat(twoNum, "\" , \u0432 \u0446\u044C\u043E\u043C\u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456 \u0442\u0430\u043A\u0456 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430 \"").concat(findNum(oneNum, twoNum), "\""));