"use strict";

// Мінімум
//1.^ Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
//   кількість і куплений він чи ні, ціну за одиницю товару, сума.Написати кілька функцій для роботи з таким масивом:
//2.^ Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані,
//   а потім - ті, що вже придбали.
//3. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
var shoppingList = [{
  item: 'chips',
  number: 1,
  buy: 'no',
  price: 25,
  totalPrice: 25
}, {
  item: 'beer',
  number: 2,
  buy: 'yes',
  price: 20,
  totalPrice: 40
}, {
  item: 'cider',
  number: 3,
  buy: 'yes',
  price: 22,
  totalPrice: 66
}, {
  item: 'nuts',
  number: 1,
  buy: 'no',
  price: 12,
  totalPrice: 12
}];
shoppingList.sort(function (a, b) {
  if (a.buy > b.buy) {
    return 1;
  }

  if (a.buy < b.buy) {
    return -1;
  }

  if (a.buy == b.buy) {
    return 0;
  }
}); // shoppingList.splice()
// let findObject = shoppingList.find(el => el.shoppingList.buy)

console.log(shoppingList);
console.log(shoppingList.findIndex(function (el) {
  return el.item === 'beer';
}));