"use strict";

// alert("taskMin1")
// let userOld = prompt("Привіт, Друже! Як справи? Сподіваюсь, що ти хоч трошечки відпочив. Давай більше познайомимося, скажи скільки тобі років?")
// if (userOld <= 11) {
//     alert("Та тиж маленьке дитинча, ще! Як ти сюди потрапив? Де твої батьки? Ну,гаразд, ходімо далі")
// }
// if (userOld >= 12 && userOld <= 17) {
//     alert("Та тиж підліток, ще! Сподіваюсь ти хоч без пива? Ну,гаразд, ходімо далі")
// }
// if (userOld >= 18 && userOld <= 59) {
//     alert("Ми з тоботою майже одного віку! Сподіваюсь ти пьєшь пиво, бо мені , ну дуже хочеться? Ну,гаразд, ходімо далі")
// }
// if (userOld >= 60 && userOld <= 99) {
//     alert("Оу, старенькі які ви тут! В вас мабудь велика кількість байок є? Ну,гаразд, по дорозі розкажете")
// }
// else{
//     alert("Щось я не зрозумів, спробуємо наступного разу, бачу тобі не дуже хочеть ся про це говорити")
// //     return {
// //         userOld
// //     };
// }
// alert("taskMin2")
// let chooseNumber = prompt("Знову буде тобі фокус. Вибери число від 0 до 9, а я покажу тобі спецсимвол який стоїть за ним. Почнемо")
// switch (chooseNumber) {
//     case '1':
//         alert("Ти ввів '1' тому твій спецсимвол '!' , поїхали далі? ")
//         break;
//     case '2':
//         alert("Ти ввів '2' тому твій спецсимвол '@' , поїхали далі? ")
//         break;
//     case '3':
//         alert("Ти ввів '3' тому твій спецсимвол '#' , поїхали далі? ")
//         break;
//     case '4':
//         alert("Ти ввів '4' тому твій спецсимвол '$' , поїхали далі? ")
//         break;
//     case '5':
//         alert("Ти ввів '5' тому твій спецсимвол '%' , поїхали далі? ")
//         break;
//     case '6':
//         alert("Ти ввів '6' тому твій спецсимвол '^' , поїхали далі? ")
//         break;
//     case '7':
//         alert("Ти ввів '7' тому твій спецсимвол '&' , поїхали далі? ")
//         break;
//     case '8':
//         alert("Ти ввів '8' тому твій спецсимвол '*' , поїхали далі? ")
//         break;
//     case '9':
//         alert("Ти ввів '9' тому твій спецсимвол '(' , поїхали далі? ")
//         break;
//     case '0':
//         alert("Ти ввів '0' тому твій спецсимвол ')' , поїхали далі? ")
//         break;
//     default:
//         alert("Ти ввів не вірний символ, тому нічого не буде. Не хочеш нічого робити, не будемо. Поїхали далі.")
//         break;
// }
alert("taskMin3");
var arrayNumber = prompt("А тепер запиши будь яку кількість чисел (давай до 20 штук), а я порахую їх сумму. Починай");
var arrayNumberResult = Array.from(arrayNumber);
alert("\u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0442\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0432 \u0447\u0438\u0441\u043B\u043E ".concat(arrayNumber, " \u0456 \u043F\u0456\u0434\u0441\u0443\u043C\u043E\u043A \u0443\u0441\u0456\u0445 \u0446\u0438\u0444\u0440 \u0431\u0443\u0434\u0435 ").concat(arrayNumberResult));