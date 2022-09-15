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
console.log(a(9))