alert("taskMin1")

alert(`     Варіант функції №1

    function showMessage() {
    alert('Всім привіт!');
    }
            
            Варіант функції №2
    let newFunction = function() {
    alert('Всім привіт!');
    }
    newFunction();

            Варіант функції №3

    let newFunction = (width, height) => width * height
    consol.log(newFunction(2, 5 ));
    `)

alert("taskMin2");


let anyNumber = prompt("Скажи мені будь які цифри, а я виведу їх кількість на єкран за допомогою функції. Але ти цього не побачиш, бо функція працюе 'під капотом'")

function anyNumberFromPrompt(a) {
        return anyNumber.length
}

alert(`Друже, ти ввів "${anyNumber}"і там ${anyNumberFromPrompt()} символа, так-так я вже порахував.
         Добре, поїхали далі`);


alert("taskMin3");

alert(`Ось така є функція:
        function differenceOfNumbers(a, b) {
        if (a < b) {
                return -1
        };
        if (a > b) {
                return 1
        };
        if (a == b) {
                return 0
        };
}

console.log (differenceOfNumbers(a, b))`)
function differenceOfNumbers(a, b) {
        if (a < b) {
                return -1
        };
        if (a > b) {
                return 1
        };
        if (a == b) {
                return 0
        };
};

console.log (differenceOfNumbers(a, b));

alert("taskMin4");

alert(`А ось функція, яка обчислює факторіал числа:
function a (number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
                result*=i;
        }
        return result
}
console.log(a(10))`)

function a (number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
                result*=i;
        }
        return result
}
console.log(a(number))

alert("taskMin5");

alert(`ОК, зараз я напишу функцію, яка приймає три окремі цифри і перетворює їх в одне число.
                function j(a, b, c) {
                        let firstNum = a.toString();
                        let secondNum = b.toString();
                        let thirdNum = c.toString();
                        let finalResult = firstNum + secondNum + thirdNum;
                return finalResult
                }
                console.log(j(a,b,c))`)



function j(a, b, c) {

        let firstNum = a.toString();
        let secondNum = b.toString();
        let thirdNum = c.toString();
        let finalResult = firstNum + secondNum + thirdNum;
        
        return finalResult
}
console.log(j(1,54,5))

alert("taskMin6");

let lengthQuadro = prompt("Хей, Друже! Ти напевно скучив за Mною! Може й ні, але ми на це не будемо зважати. Тепер нам з топою треба порахувати площу прямокутника, і від тебе потрібна спочатку його ширина...")
let heightQuadro = prompt("і довжина ...")

let t = parseInt(lengthQuadro);
let g = parseInt(heightQuadro);
function areaQ(t, g) {
        let result = t * g;
        return result
        if (number === falce) {
                alert("Ну миж домовлялися вводити число. Чому тобі так і хочется зробити навпаки? Єх...")
  }
}
alert(`З тої інфи що ти мені дав ширина "${lengthQuadro}" і довжина "${heightQuadro}", я можу судити, а JS порахувати, що площа буде ""${areaQ(lengthQuadro,heightQuadro)}"", сподіваюсь , що вірно`)

function areaQ(t, g) {
        let result = t*g;
        return result
}
console.log(areaQ(2,3))

alert("taskNorm1");

let perfectNum = prompt('Ух, Друже. Ми перейшли на інший рівень, де зовсім інші задачі. Нам треба знайти “досконале число”, (Досконале число - це число, яке дорівнює сумі всіх своїх дільників). Так от, вводи число, а я тобі скажу, досконале воно чи ні. Поїхали ... ')


function seachNum(perfectNum) {
        perfectNum = parseInt(perfectNum);
        let result = 0;
        for (let i = 1; i < perfectNum; i++) {
                if (perfectNum % i === 0) {
                        result = result + i;
                }
        }
        return perfectNum === result ? alert(`Число ${perfectNum}, Досконале число.
                Блін, треба було просто переписати умову з уроку де ти пояснював як робити цю задачю, я витратив на неї більше години і навіть не знаю, що робив не так. Бо переробляв її і переробляв, і в кінці вона така ж сама як твоя. Жах.
                Пробач, не втримався.
        Гаразд поїхали далі`) : alert(`Число ${perfectNum}, не є досконалим числом. Гаразд поїхали далі`);
}
console.log(seachNum(perfectNum))

alert("taskNorm2");

let oneNum = +prompt('Нарешті ми підійшли до кінця домашки. Ну, що, Друже. Все як завжди, кажи спочатку перше число, а потім друге. А я виведу тобі на єкран всі досконалі числа в цьому діапазоні. Згоден? Тоді почали, пеше число буде ... ')
let twoNum = +prompt("Друге число буде ... ")

function findNum(oneNum,twoNum) {
        let result = 0;
        for (let i = oneNum; i <= twoNum; i++) {
              seachNum(i)
        }
        return result 
}
console.log(findNum(oneNum, twoNum))

alert(`Ти ввів число "${oneNum}" і число "${twoNum}" , в цьому діапазоні такі досконалі числа "${findNum(oneNum,twoNum)}"`)