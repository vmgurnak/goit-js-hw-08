// Task 3
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".

// 2.При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

// Подключение библиотеки lodash.throttle - Including the lodash.throttle library
// npm i --save lodash.throttle
import throttle from 'lodash.throttle';

// КОД С КОММЕНТАРИЯМИ - CODE WITH COMMENTS

// // Переменная для ключа в хранилище - Variable for key in storage
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// // Поиск эдмента формы form.feedback-form - Searching for the form element form.feedback-form
// const form = document.querySelector('.feedback-form');

// // Деструктуризация элементов формы - Destructuring form elements
// // const {
// //   elements: { email, message },
// // } = form;
// const { email, message } = form.elements;

// // Объект для данных формы - Object for form data
// // Получение данных из локального хранилища - Retrieving data from local storagegetItem(), JSON.parse()
// let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
// // Присвоение значений полям формы - Assigning values to form fields
// email.value = dataForm.email || '';
// message.value = dataForm.message || '';

// // Вызов слушателя на форме с событием input, метод throttle - Calling a listener on a form with an input event, throttle method
// form.addEventListener(
//   'input',
//   throttle(event => formInput(event), 500)
// );

// // Коллбэк-функция для слушателя с событием input - Callback function for listener with input event
// function formInput(event) {
//   // Добавление в объект элемента при вводе в форму - Adding an element to an object when entering a form
//   dataForm[event.target.name] = event.target.value;

//   // Сохранение в локальное хранилище, объект с полями email и message - Saving to local storage, an object with email and message fields
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
// }

// // Вызов слушателя на форме с событием submit - Calling a listener on a form with the submit event
// form.addEventListener('submit', formSubmit);

// // Коллбэк-функция для слушателя с событием submit - Callback function for listener with submit event
// function formSubmit(event) {
//   // Отмена действий по умолчанию - Cancel default actions
//   event.preventDefault();
//   // вывод в консоль объекта - object output to console
//   console.log(dataForm);
//   // Очистка хранилища и формы - Cleaning storage and form
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   //   email.value = '';
//   //   message.value = '';
//   // Очистка полей формы после отправки - Clearing form fields after submission
//   event.currentTarget.reset();
//   // Очистка объект с данными для формы localStorage - Clearing a data object
//   dataForm = {};
// }

// КОД БЕЗ КОММЕНТАРИЕВ - CODE WITHOUT COMMENTS

// npm i --save lodash.throttle
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
console.log(dataForm);
email.value = dataForm.email ?? '';
message.value = dataForm.message ?? '';

form.addEventListener(
  'input',
  throttle(event => formInput(event), 500)
);
function formInput(event) {
  dataForm[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
  console.log(dataForm);
}

form.addEventListener('submit', formSubmit);
function formSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  dataForm = {};
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
