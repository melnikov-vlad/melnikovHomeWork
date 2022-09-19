"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
//       і наступні методи для роботи з цим об'єктом:
//1. Метод, який виводить на екран інформацію про автомобіль.
//2. Додавання ім’я водія у список
//3. Перевірка водія на наявність його ім’я у списку
//4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
var car = {
  manufacture: "daf",
  model: ["x670"],
  old: 2010,
  speed: 65,
  capacity: 210,
  gas: 35,
  drivers: ["oleg"],
  showCar: function showCar() {
    console.log(this);
  },
  addDrivers: function addDrivers(drivers) {
    this.drivers.push(drivers);
  },
  userDist: function userDist(distance) {
    var distArc = distance / 100 * this.gas;
    var timeArc = distance / this.speed;

    if (timeArc >= 4) {
      var restTime = timeArc / 4;
      timeArc = timeArc + restTime;
    }

    console.log(distArc, Math.trunc(timeArc * 60));
  },
  addModel: function addModel(model) {
    this.model.push(model);
  }
};
car.addModel("volvo");
car.addModel("poiuy");
car.userDist(2000);
console.log(car.drivers.includes("yana"));
car.addDrivers("mitia");
car.showCar(); //Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
//      Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21: 00: 15», а не «20: 59: 75».
//      Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hour: 1,
  minut: 1,
  second: 1,
  sumSecond: function sumSecond(addSecond) {
    this.second += addSecond;
  },
  showTime: function showTime() {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442 \u0414\u0440\u0443\u0436\u0435! \u041D\u0430 \u0434\u0430\u043D\u043D\u0438\u0439 \u0447\u0430\u0441 \"".concat(this.hour, "\" \u0433\u043E\u0434\u0438\u043D \"").concat(this.minut, "\" \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u0430 \"").concat(this.sumSecond(), "\" \u0441\u0435\u043A\u0443\u043D\u0434."));
  }
};
time.showTime();
time.sumSecond(20);
console.log(time);