// axios(URL)                        ///ось так отримаємо респонс у консоль
//     .then(response => {
//         console.log(response);
//     });

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5a387ab';


// axios(URL + '&t=aci')
//     .then(response => {
        
//         createMovieList([response.data])     /// якщо з сервера приходить один файл треба
//                                             /// - ставити '[]' такі дужки, якщо приходить
//                                             /// масив то не треба.
//     }).catch(error => {
//         console.log(error);
//     });

function createMovieList(list) {       // створюємо функцію для створення списків фільмів
        list.forEach(element => {        // запускаємо метод forEach
            const ul = document.getElementById('list');    //у html є тег ul  з id "list"
            const li = document.createElement('li');   // в html створюємо єлемент "li"
            li.textContent = element.Title;     // в "li" буде назва його поля name
            ul.append(li);  // додаємо створений єлемент "li" до нашого "ul" в html
        });
}

function findAFilm() {
    const query = document.getElementById('search').value;   // для того, щоб прив`язати запит в інпуті
    console.log(query);
    axios(URL + `&t=${query}`)          /// поле робимо динамічне, щоб можна було вводити різні інпути
        .then(response => {
             createMovieList([response.data])     /// якщо з сервера приходить один файл треба
                                                /// - ставити '[]' такі дужки, якщо приходить
                                                /// масив то не треба.
        }).catch(error => {
            console.log(error);
        });
}



