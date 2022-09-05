let a = 0.1
let b = 0.2
console.log ((a + b).toFixed(1))

alert("taskMin1")

alert("Привіт, Друже, ти знову завітав до мене. Ти здивуєшся але согодні в нас знову математика. 0.1 + 0.2 буде 0.3 якщо використаэмо оператора 'toFixed()'.")
alert("Приклад: console.log ((a + b).toFixed(1))")

alert("taskMin2")

// let a = '1';
// let b = 2;
// console.log(parseInt(a) + b)

alert("Далі додамо до рядка `1` цифру 2, і використаємо `parseInt()`")
alert("Приклад: console.log(parseInt(a) + b)")


alert("taskMin3")
let fleshSize = prompt("А тепер, задача. Скажи мені на скільки гіг твоя флешка, а я скажу тобі скільки фільмів розміром 820Mb у неї влізе")
let mbSize = fleshSize * 1024;

if (fleshSize.replace (/\d/g, '').length) alert ('Я не зрозумів, і тепер прийдеться пропустити цю частину');

alert (`Якщо твоя флешка на ${fleshSize} Gb , то в тебе влізе ${Math.floor(mbSize/820)} фільмів розміром 820Mb`)

alert("taskNorm1")

let moneyCash = prompt("*І знову за рибу гроші*, так ми знову рахуємо твої гроші. Скажи скльки грошиків є в твоєму гаманці?");
let chocolatePrice = prompt ("А тепер скажи, скільки коштує плитка шоколаду в магазині на рогом? Тільки вводи не дуже дорогий, а то на багато не вистачить:)");
let balanceOfMoney = Math.floor(moneyCash / chocolatePrice);
let differenceMoney = moneyCash - (balanceOfMoney * chocolatePrice);
let moneyOff = chocolatePrice - differenceMoney;
alert(`Після нескладних дій ми вже знаємо, що ти , Друже, можешь поласувати лише ${balanceOfMoney} плиточками, смащнющого шоколаду. Але в тебе ще залишилося ${differenceMoney} монеток. Требя, ще трошки назбирати до наступної плиточки, всьго ${moneyOff} монеток. Ціна то "${chocolatePrice}" дэнюшек.`)

alert("taskNorm2")

let anyNomber = prompt("І на останок (бо оченята і в тебе і мене вже зліпаються) покажу тобі фокус, але ти його напевно знаєшь. Так от, загадай будь яке число (до 10 символів, щоб скоріше було), і напиши мені, а я його покажу навпаки! Бачиш, як вмію! Ну пиши вже")
let arrayNumber = Array.from(anyNomber).reverse().join('');
alert(`ТРАМ-ТА-РА-РАМ твоє перевернете число ${arrayNumber}.
                    А ! Ну як! Сподобалося?
 Та я знаю, що ти знаєшь, дякую, що показав це на уроці, бо інакше сидіди мені і сидіти за компом до третьої години. Дякую за увагу. Приходьте наступного разу, може я щось новеньке вивчу. Радий був Вас бачити.`)