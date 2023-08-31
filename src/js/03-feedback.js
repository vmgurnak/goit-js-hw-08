// Task 3
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".

// 2.При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

// Подключение библиотеки lodash.throttle
// npm i --save lodash.throttle
import throttle from 'lodash.throttle';

// Переменная для ключа для хранилища
const LOCALSTORAGE_KEY = 'feedback-form-state';

// Поиск формы
const form = document.querySelector('.feedback-form');
// Деструктуризация
const {
  elements: { email, message },
} = form;

// Получение данных из локального хранилища getItem(), JSON.parse()
const savedDateForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
// console.log(savedDateForm);

// Проверка есть ли данные в хранилище, заполнение полей формы данными их хранилища
if (savedDateForm !== null) {
  email.value = savedDateForm.email;
  message.value = savedDateForm.message;
} else {
  email.value = '';
  message.value = '';
}

// Вызов слушателя на форме с событием input, метод throttle
form.addEventListener(
  'input',
  throttle(event => formInput(event), 500)
);

// Коллбэк-функция для слушателя с input
function formInput(event) {
  //   Дескруктуризация, свойство DOM-элемента формы объекта с элементами
  const {
    elements: { email, message },
  } = event.currentTarget;
  // Объект с текущим значением email и message
  const dateForm = {
    email: email.value,
    message: message.value,
  };
  // Сохранение в локальное хранилище, объект с полями email и message
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dateForm));
}

// Вызов слушателя на форме с событием submit
form.addEventListener('submit', formSubmit);

// Коллбэк-функция для submit - очистка хранилища, вывод в консоль объекта со занчением полей ввода
function formSubmit(event) {
  // Отмена действий по умолчанию
  event.preventDefault();
  //   Дескруктуризация, свойство DOM-элемента формы объекта с элементами
  const {
    elements: { email, message },
  } = event.currentTarget;
  // вывод в консоль объекта
  console.log({
    [email.name]: email.value,
    [message.name]: message.value,
  });
  // очистка хранилища и формы
  localStorage.removeItem(LOCALSTORAGE_KEY);
  //   email.value = '';
  //   message.value = '';
  // Очистка полей формы после отправки
  event.currentTarget.reset();
}
