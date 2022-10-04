

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5a387ab';
axios(URL)                        ///ось так отримаємо респонс у консоль
    .then(response => {
        console.log(response);
    });

// axios(URL + '&t=aci')
//     .then(response => {
        
//         createMovieList([response.data])     /// якщо з сервера приходить один файл треба
//                                             /// - ставити '[]' такі дужки, якщо приходить
//                                             /// масив то не треба.
//     }).catch(error => {
//         console.log(error);
//     });

let movieType = 'movie';       // створюємо змінну, щоб можна було змінну додати до інпуту та до функціі з радіо кнопкою

function createMovieList(list) {       // створюємо функцію для створення списків фільмів
        list.forEach(element => {        // запускаємо метод forEach
            const ul = document.getElementById('list');    //у html є тег ul  з id "list"
            const li = document.createElement('li');   // в html створюємо єлемент "li"
            const img = document.createElement('img');  // додємо перед текстом зображання, створюємо img в html 
            img.setAttribute('src', element.Poster);    // додаємо в img атрибут. і назву постера в api
            li.textContent = element.Title;     // в "li" буде назва його поля name
            
            ul.append(img); //додаємо в наш список фото перед текстом
            ul.append(li);  // додаємо створений єлемент "li" до нашого "ul" в html
        });
}

function findAFilm() {
    const query = document.getElementById('search').value;   // для того, щоб прив`язати запит в інпуті
    console.log(query);
    
    axios(URL + `&t=${query}&type=${movieType}`)          /// поле робимо динамічне, щоб можна було вводити різні інпути
        .then(response => {
             createMovieList([response.data])     /// якщо з сервера приходить один файл треба
                                                /// - ставити '[]' такі дужки, якщо приходить
                                                /// масив то не треба.
        }).catch(error => {
            console.log(error);
        });
}


function changeType(event) {      ///функці яка буде відправляти тип відео, з радіо кнопки в html з value
    // console.log(event.target.value);
    movieType = event.target.value;    //змінна movieType буде змінюватися кожен раз , коли ми перемекаємо радіо кнопку
}

