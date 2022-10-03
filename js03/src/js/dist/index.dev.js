"use strict";

alert("taskMin1");
var userOld = prompt("Привіт, Друже! Як справи? Сподіваюсь, що ти хоч трошечки відпочив. Давай більше познайомимося, скажи скільки тобі років?");

if (userOld <= 11) {
  alert("Та тиж маленьке дитинча, ще! Як ти сюди потрапив? Де твої батьки? Ну,гаразд, ходімо далі");
}

if (userOld >= 12 && userOld <= 17) {
  alert("Та тиж підліток, ще! Сподіваюсь ти хоч без пива? Ну,гаразд, ходімо далі");
}

if (userOld >= 18 && userOld <= 59) {
  alert("Ми з тоботою майже одного віку! Сподіваюсь ти пьєшь пиво, бо мені , ну дуже хочеться? Ну,гаразд, ходімо далі");
}

if (userOld >= 60 && userOld <= 99) {
  alert("Оу, старенькі які ви тут! В вас мабудь велика кількість байок є? Ну,гаразд, по дорозі розкажете");
} else {
  alert("Щось я не зрозумів, спробуємо наступного разу, бачу тобі не дуже хочеться про це говорити"); //     return {
  //         userOld
  //     };
}

alert("taskMin2");
var chooseNumber = prompt("Знову буде тобі фокус. Вибери число від 0 до 9, а я покажу тобі спецсимвол який стоїть за ним. Почнемо");

switch (chooseNumber) {
  case '1':
    alert("Ти ввів '1' тому твій спецсимвол '!' , поїхали далі? ");
    break;

  case '2':
    alert("Ти ввів '2' тому твій спецсимвол '@' , поїхали далі? ");
    break;

  case '3':
    alert("Ти ввів '3' тому твій спецсимвол '#' , поїхали далі? ");
    break;

  case '4':
    alert("Ти ввів '4' тому твій спецсимвол '$' , поїхали далі? ");
    break;

  case '5':
    alert("Ти ввів '5' тому твій спецсимвол '%' , поїхали далі? ");
    break;

  case '6':
    alert("Ти ввів '6' тому твій спецсимвол '^' , поїхали далі? ");
    break;

  case '7':
    alert("Ти ввів '7' тому твій спецсимвол '&' , поїхали далі? ");
    break;

  case '8':
    alert("Ти ввів '8' тому твій спецсимвол '*' , поїхали далі? ");
    break;

  case '9':
    alert("Ти ввів '9' тому твій спецсимвол '(' , поїхали далі? ");
    break;

  case '0':
    alert("Ти ввів '0' тому твій спецсимвол ')' , поїхали далі? ");
    break;

  default:
    alert("Ти ввів не вірний символ, тому нічого не буде. Не хочеш нічого робити, не будемо. Поїхали далі.");
    break;
}

alert("taskMin3");
var arrayNumber = prompt("А тепер запиши будь яку кількість чисел (давай до 20 штук), а я порахую їх добуток. Починаємо");
var arrayNumberResult = Array.from(arrayNumber).reduce(function (totalNumber, elem) {
  if (elem >= 0) {
    return totalNumber * elem; // + not work//
  } else {
    return totalNumber;
  }
});
alert("\u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0442\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0432 \u0447\u0438\u0441\u043B\u043E ".concat(arrayNumber, " \u0456 \u0434\u043E\u0431\u0443\u0442\u043E\u043A (*) \u0443\u0441\u0456\u0445 \u0446\u0438\u0444\u0440 \u0431\u0443\u0434\u0435 ").concat(arrayNumberResult)); // let arrayNumberResult = arrayNumber.split('').reduce(function(totalNumber, elem) {
//     elem = parseInt(elem);
//     if (elem >= 0) {
//         return totalNumber + elem;  // + not work//
//     } else {
//         return totalNumber;
//     }
// }, 0);
// console.log(arrayNumberResult);

alert("taskMin4");
var firstNumber = prompt("Ще в мене, є таке прохання, закадай мені два числа, а я спробую знайти їхній найбільший спільний дільник. Перше число буде");
var secondNumber = prompt("Друге число");

function NOD(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) return NOD(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return NOD(secondNumber, firstNumber % secondNumber);
}

alert("\u041E\u0434\u0436\u0435 \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(firstNumber, " , \u0430 \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E ").concat(secondNumber, " \u0442\u043E \u0457\u0445\u043D\u0456\u0439 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0431\u0443\u0434\u0435 ").concat(NOD(firstNumber, secondNumber)));
alert("taskMin5");
var oneNumber = prompt(" (\u0426\u0415 \u041D\u0415 \u0412\u0418\u0419\u0428\u041B\u041E, \u0406 \u0414\u0410\u041B\u0406 \u041D\u0406\u0427\u041E\u0413\u041E \u041D\u0415\u041C\u0410) \u0410 \u043E\u0441\u044C \u0432\u0436\u0435 \u043E\u0441\u0442\u0430\u043D\u043D\u0454 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F. \u041D\u0430\u0437\u0432\u0438 \u043C\u0435\u043D\u0456 \u0431\u0443\u0434\u044C \u044F\u043A\u0435 \u0447\u0438\u0441\u043B\u043E (\u0434\u0430\u0432\u0430\u0439 \u043C\u0430\u0431\u0443\u0442\u044C \u043C\u0435\u043D\u0448\u0435 100 000 000, \u0449\u043E\u0431 \u043B\u0435\u0433\u0448\u0435 \u0440\u0430\u0445\u0443\u0432\u0430\u043B\u043E\u0441\u044F), \u0430 \u044F \u043D\u0430\u0437\u0432\u0443 \u0443\u0441\u0456 \u0439\u043E\u0433\u043E \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438.\n \u041E\u0442\u0436\u0435 \u043F\u043E\u0447\u0430\u043B\u0438, \u0442\u0432\u043E\u0454 \u0447\u0438\u0441\u043B\u043E \u0431\u0443\u0434\u0435...");
var arrayOneNumber = Array.from(oneNumber);

for (var _i = 0; _i <= arrayOneNumber.length - 1; _i++) {
  ;
}

if (arrayOneNumber[i] % 2 === 0) {
  alert("\u041E\u0442\u0436\u0435 \u0432 \u0437\u0430\u0433\u0430\u0434\u0430\u043D\u043E\u043C\u0443 \u0442\u043E\u0431\u043E\u044E \u0447\u0438\u0441\u043B\u0456 ".concat(oneNumber, ", \u0454 \u0442\u0430\u043A\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 ").concat(arrayOneNumber[i]));
}

;

if (i >= 100000001) {
  alert("\u041C\u0438 \u0436 \u0434\u043E\u043C\u043E\u0432\u0438\u043B\u0438\u0441\u044C, \u0449\u043E \u0442\u0440\u0435\u0431\u0430 \u0432\u0432\u043E\u0434\u0438\u0442! \u0410 \u0442\u0438 \u0432\u0432\u0456\u0432 \u044F\u043A\u0443\u0441\u044C \u0434\u0443\u0440\u043D\u0438\u0446\u044E ".concat(oneNumber));
}

;