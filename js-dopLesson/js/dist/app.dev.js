"use strict";

// Selectors
// getElementById - get first element
// getElementsByClassName - get ALL elements with class
// getElementsByName - get ALL elements with name
// querySelector - get by selector
// .parentNode - get parent element
// Manipulation
// textContent - add new text node inside element
// innerHTML
// createElement
// appendChild
// append
// prepend
// insertBefore
// Work with attributes
// setAttribute
// TODO
// clean input after adding a new item - done
// check is done - done
// add details info - done
// add deadline / check if it passed
// add categories Done/Not done
// bootstrap notifications
// active state - done
// add address
// delete items
var LI_CLASSES = 'list-group-item d-flex align-items-center border-0 mb-2 rounded';
var todoList = document.querySelector('#todo');
var todoArr = [{
  label: 'Buy Apple',
  isDone: false
}, {
  label: 'Feed dog',
  isDone: false
}];

function cleanToDo() {
  todoList.innerHTML = '';
}

;

function toggleModal() {
  var modalW = document.querySelector('.modal');
  var isOpen = modalW.classList.contains('open');
  isOpen ? modalW.classList.remove('open') : modalW.classList.add('open');
}

;

function createIcon() {
  var a = document.createElement('a');
  a.setAttribute('href', '#');
  a.classList.add('show-icon');
  a.addEventListener('click', function (e) {
    var targetItem = e.target.parentNode; //шукаю батьківський li для іконки по якій клікнув

    var dataIndex = targetItem.dataset.index; // беру дата-атрибут батьківського li

    var title = document.querySelector('.modal-title'); // шукаю html елемент у який буду додавати текст

    title.textContent = todoArr[dataIndex].label; // додаю значення label потрібного елемента з масиву  

    var badge = document.querySelector('.badge');
    badge.textContent = todoArr[dataIndex].isDone ? 'Done' : 'To Do';

    if (todoArr[dataIndex].isDone) {
      badge.classList.remove('badge-alert');
      badge.classList.add('badge-success');
    } else {
      badge.classList.remove('badge-success');
      badge.classList.add('badge-alert');
    }

    toggleModal();
  });
  return a;
}

;

function createIconDelete() {
  var a = document.createElement('a'); //// створюємо елемент "а" в НТМІ файлі

  a.setAttribute('href', '#'); //// створюємо обов"язкові атрибути

  a.classList.add('icon_del'); //// створюємо і додаємо класс в НТМІ для нашої "а"

  a.addEventListener('click', function (e) {
    var targetItem = e.target.parentNode;
  });
  return a;
}

function createCheckbox() {
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'form-check-input me-2');
  checkbox.addEventListener('change', function (e) {
    var targetCheckbox = e.target;
    var isChecked = targetCheckbox.checked;
    var parentLi = targetCheckbox.parentNode;
    parentLi.classList.toggle('active');
    var dataIndex = parentLi.dataset.index;
    todoArr[dataIndex].isDone = isChecked;
  });
  return checkbox;
}

;

function createLi(item, index) {
  var li = document.createElement('li');
  var checkbox = createCheckbox();
  var icon = createIcon();
  var iconDelete = createIconDelete(); //// створив змінну яка запускає функція створення іконки видаллення

  li.setAttribute('class', LI_CLASSES);
  li.setAttribute('data-index', index);
  li.textContent = item.label;
  li.prepend(checkbox);
  li.append(icon);
  li.append(iconDelete); ////  зв"язуємо нашу іконку видалення з лі

  return li;
}

;

function createToDo() {
  todoArr.forEach(function (item, index) {
    var li = createLi(item, index);
    todoList.appendChild(li);
  });
}

function addToDo() {
  var inputEl = document.getElementById('createTodoInput');
  var newToDoName = inputEl.value;
  var newToDoObj = {
    label: newToDoName,
    isDone: false
  };
  todoArr.push(newToDoObj);
  inputEl.value = '';
  cleanToDo();
  createToDo();
}

createToDo();