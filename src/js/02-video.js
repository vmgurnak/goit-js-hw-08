// Задание 2 - видео плеер

// В HTML есть <iframe> с видео для Vimeo плеера. Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2. Добавь библиотеку как зависимость проекта через npm.
// 3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// 4. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// 5. Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7. Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

// Поиск iframe
const iframe = document.querySelector('#vimeo-player');

// Инициализация Vimeo плеера.
// npm install @vimeo/player
import Player from '@vimeo/player';
const player = new Player(iframe);

// Подключение библиотеки lodash.throttle
// npm i --save lodash.throttle
import throttle from 'lodash.throttle';

// Метод on, событие timeupdate, throttle - вызов ф-ции каждые 1000 мс
player.on('timeupdate', throttle(onTimeupdate, 1000));
// Коллбэк - функция, сохранение в локальном хранилище времени воспроизведения
function onTimeupdate(date) {
  //   console.log(date);
  localStorage.setItem('videoplayer-current-time', date.seconds);
}

// Чтение из локального хранилища
const savedDate = localStorage.getItem('videoplayer-current-time');

// Условие выполняется при наличие данных в хранилище
if (savedDate) {
  // Метод setCurrentTime() возобновление воспроизведение с сохраненной позиции.
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
