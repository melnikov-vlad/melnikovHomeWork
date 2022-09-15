"use strict";

alert("taskMin1");
alert("     \u0412\u0430\u0440\u0456\u0430\u043D\u0442 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u21161\n\n    function showMessage() {\n    alert('\u0412\u0441\u0456\u043C \u043F\u0440\u0438\u0432\u0456\u0442!');\n    }\n            \n            \u0412\u0430\u0440\u0456\u0430\u043D\u0442 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u21162\n    let newFunction = function() {\n    alert('\u0412\u0441\u0456\u043C \u043F\u0440\u0438\u0432\u0456\u0442!');\n    }\n    newFunction();\n\n            \u0412\u0430\u0440\u0456\u0430\u043D\u0442 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u21163\n\n    let newFunction = (width, height) => width * height\n    consol.log(newFunction(2, 5 ));\n    ");
alert("taskMin2");
var anyNumber = prompt("Скажи мені будь які цифри, а я виведу їх кількість на єкран за допомогою функції. Але ти цього не побачиш, бо функція працюе 'під капотом'");

function anyNumberFromPrompt(a) {
  return anyNumber.length;
}

alert("\u0414\u0440\u0443\u0436\u0435, \u0442\u0438 \u0432\u0432\u0456\u0432 \"".concat(anyNumber, "\"\u0456 \u0442\u0430\u043C ").concat(anyNumberFromPrompt(), " \u0441\u0438\u043C\u0432\u043E\u043B\u0430, \u0442\u0430\u043A-\u0442\u0430\u043A \u044F \u0432\u0436\u0435 \u043F\u043E\u0440\u0430\u0445\u0443\u0432\u0430\u0432.\n         \u0414\u043E\u0431\u0440\u0435, \u043F\u043E\u0457\u0445\u0430\u043B\u0438 \u0434\u0430\u043B\u0456"));
alert("taskMin3");
alert("\u041E\u0441\u044C \u0442\u0430\u043A\u0430 \u0454 \u0444\u0443\u043D\u043A\u0446\u0456\u044F:\n        function differenceOfNumbers(a, b) {\n        if (a < b) {\n                return -1\n        };\n        if (a > b) {\n                return 1\n        };\n        if (a == b) {\n                return 0\n        };\n}\n\nconsole.log (differenceOfNumbers(a, b))");

function differenceOfNumbers(a, b) {
  if (a < b) {
    return -1;
  }

  ;

  if (a > b) {
    return 1;
  }

  ;

  if (a == b) {
    return 0;
  }

  ;
}

;
console.log(differenceOfNumbers(a, b));
alert("taskMin4");
alert("\u0410 \u043E\u0441\u044C \u0444\u0443\u043D\u043A\u0446\u0456\u044F, \u044F\u043A\u0430 \u043E\u0431\u0447\u0438\u0441\u043B\u044E\u0454 \u0444\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0447\u0438\u0441\u043B\u0430:\nfunction a (number) {\n        let result = 1;\n        for (let i = 1; i <= number; i++) {\n                result*=i;\n        }\n        return result\n}\nconsole.log(a(10))");

function a(number) {
  var result = 1;

  for (var i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(a(9));