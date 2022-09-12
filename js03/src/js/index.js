alert("taskMin1")

let userOld = prompt("Привіт, Друже! Як справи? Сподіваюсь, що ти хоч трошечки відпочив. Давай більше познайомимося, скажи скільки тобі років?")
if (userOld <= 11) {
    alert("Та тиж маленьке дитинча, ще! Як ти сюди потрапив? Де твої батьки? Ну,гаразд, ходімо далі")
}
if (userOld >= 12 && userOld <= 17) {
    alert("Та тиж підліток, ще! Сподіваюсь ти хоч без пива? Ну,гаразд, ходімо далі")
}
if (userOld >= 18 && userOld <= 59) {
    alert("Ми з тоботою майже одного віку! Сподіваюсь ти пьєшь пиво, бо мені , ну дуже хочеться? Ну,гаразд, ходімо далі")
}
if (userOld >= 60 && userOld <= 99) {
    alert("Оу, старенькі які ви тут! В вас мабудь велика кількість байок є? Ну,гаразд, по дорозі розкажете")
}
else{
    alert("Щось я не зрозумів, спробуємо наступного разу, бачу тобі не дуже хочеться про це говорити")
//     return {
//         userOld
//     };
}

alert("taskMin2")

let chooseNumber = prompt("Знову буде тобі фокус. Вибери число від 0 до 9, а я покажу тобі спецсимвол який стоїть за ним. Почнемо")
switch (chooseNumber) {
    case '1':
        alert("Ти ввів '1' тому твій спецсимвол '!' , поїхали далі? ")
        break;
    case '2':
        alert("Ти ввів '2' тому твій спецсимвол '@' , поїхали далі? ")
        break;
    case '3':
        alert("Ти ввів '3' тому твій спецсимвол '#' , поїхали далі? ")
        break;
    case '4':
        alert("Ти ввів '4' тому твій спецсимвол '$' , поїхали далі? ")
        break;
    case '5':
        alert("Ти ввів '5' тому твій спецсимвол '%' , поїхали далі? ")
        break;
    case '6':
        alert("Ти ввів '6' тому твій спецсимвол '^' , поїхали далі? ")
        break;
    case '7':
        alert("Ти ввів '7' тому твій спецсимвол '&' , поїхали далі? ")
        break;
    case '8':
        alert("Ти ввів '8' тому твій спецсимвол '*' , поїхали далі? ")
        break;
    case '9':
        alert("Ти ввів '9' тому твій спецсимвол '(' , поїхали далі? ")
        break;
    case '0':
        alert("Ти ввів '0' тому твій спецсимвол ')' , поїхали далі? ")
        break;
    default:
        alert("Ти ввів не вірний символ, тому нічого не буде. Не хочеш нічого робити, не будемо. Поїхали далі.")
        break;
}

alert("taskMin3")

let arrayNumber = prompt("А тепер запиши будь яку кількість чисел (давай до 20 штук), а я порахую їх добуток. Починаємо")
let arrayNumberResult = Array.from(arrayNumber).reduce(function (totalNumber, elem) {
    if (elem >= 0) {
		return totalNumber * elem;  // + not work//
	} else {
		return totalNumber;
	}
})
alert(`Таким чином, ти написав число ${arrayNumber} і добуток (*) усіх цифр буде ${arrayNumberResult}`)

alert("taskMin4")

let firstNumber = prompt("Ще в мене, є таке прохання, закадай мені два числа, а я спробую знайти їхній найбільший спільний дільник. Перше число буде");
let secondNumber = prompt("Друге число");
function NOD(firstNumber, secondNumber) {
    if (secondNumber > firstNumber) return NOD(secondNumber, firstNumber);
	if (!secondNumber) return firstNumber;
	return NOD(secondNumber, firstNumber % secondNumber);
}
alert(`Одже перше число ${firstNumber} , а друге число ${secondNumber} то їхній найбільший спільний дільник буде ${NOD(firstNumber, secondNumber)}`)

alert("taskMin5")

let oneNumber = prompt(` (ЦЕ НЕ ВИЙШЛО, І ДАЛІ НІЧОГО НЕМА) А ось вже останнє завдання мінімального рівня. Назви мені будь яке число (давай мабуть менше 100 000 000, щоб легше рахувалося), а я назву усі його дільники.
 Отже почали, твоє число буде...`);
let arrayOneNumber = Array.from(oneNumber);
for (let i = 0; i <= arrayOneNumber.length - 1; i++);
if (arrayOneNumber[i]%2 === 0) {
        alert (`Отже в загаданому тобою числі ${oneNumber}, є такі дільники ${arrayOneNumber[i]}`)
};
if (i >= 100000001) {
    alert (`Ми ж домовились, що треба вводит! А ти ввів якусь дурницю ${oneNumber}`)
};

