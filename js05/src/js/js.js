// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
//       і наступні методи для роботи з цим об'єктом:
//1. Метод, який виводить на екран інформацію про автомобіль.
//2. Додавання ім’я водія у список
//3. Перевірка водія на наявність його ім’я у списку
//4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    manufacture: "daf",
    model: ["x670"],
    old: 2010,
    speed: 65,
    capacity: 210,
    gas: 35,
    drivers: ["oleg"],
    showCar: function() {
        console.log(this)
    },
    addDrivers: function(drivers) {
        this.drivers.push(drivers)
    },
    userDist: function (distance) {
        let distArc = distance / 100 * this.gas;
        let timeArc = distance / this.speed;

        if (timeArc >= 4) {
            let restTime = timeArc / 4;
            timeArc = timeArc + restTime;
        }

        console.log(distArc, Math.trunc(timeArc*60))
    },

    addModel: function (model) {
        this.model.push(model)
    }
}

car.addModel("volvo")
car.addModel("poiuy")
car.userDist(2000)

console.log(car.drivers.includes("yana"));

car.addDrivers("mitia")

car.showCar()


//Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
//      Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21: 00: 15», а не «20: 59: 75».
//      Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hour: 1,
    minut: 1,
    second: 1,
    
    sumSecond: function (addSecond) {
        this.second += addSecond;
        return this.second;
    },
    showTime: function (second) {
        alert(`Привіт Друже! На данний час "${this.hour}" годин "${this.minut}" хвилин та "${this.sumSecond(second)}" секунд.`);
    },
    
}

time.showTime(30)

// time.sumSecond(20)

console.log(time)