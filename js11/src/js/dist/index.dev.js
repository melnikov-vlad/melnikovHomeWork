"use strict";

// axios(URL)                        ///ось так отримаємо респонс у консоль
//     .then(response => {
//         console.log(response);
//     });
var URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5a387ab'; // axios(URL + '&t=aci')
//     .then(response => {
//         createMovieList([response.data])     /// якщо з сервера приходить один файл треба
//                                             /// - ставити '[]' такі дужки, якщо приходить
//                                             /// масив то не треба.
//     }).catch(error => {
//         console.log(error);
//     });

function createMovieList(list) {
  // створюємо функцію для створення списків фільмів
  list.forEach(function (element) {
    // запускаємо метод forEach
    var ul = document.getElementById('list'); //у html є тег ul  з id "list"

    var li = document.createElement('li'); // в html створюємо єлемент "li"

    li.textContent = element.Title; // в "li" буде назва його поля name

    ul.append(li); // додаємо створений єлемент "li" до нашого "ul" в html
  });
}

function findAFilm() {
  var query = document.getElementById('search').value; // для того, щоб прив`язати запит в інпуті

  console.log(query);
  axios(URL + "&t=".concat(query)) /// поле робимо динамічне, щоб можна було вводити різні інпути
  .then(function (response) {
    createMovieList([response.data]); /// якщо з сервера приходить один файл треба
    /// - ставити '[]' такі дужки, якщо приходить
    /// масив то не треба.
  })["catch"](function (error) {
    console.log(error);
  });
}