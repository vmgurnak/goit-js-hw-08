// Задание 1 - библиотека SimpleLightbox

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).

// Импорт массива объектов
import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

// Подключение библиотеки
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.

// Поиск ul.list
const container = document.querySelector('.gallery');

// Функция createMarkup(arr) для создание разметки, метод map, преобразование массива galleryItems, создание нового массива с элементом строки, деструктуризация объекта, метод join преобразование массива в строку

function createMarkup(arr) {
  // функция возвращает строку с разметкой
  return (
    // метод map преобразует массив в массив тегов, join в строку
    arr
      .map(
        ({ preview, original, description }) =>
          `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
      )
      .join('')
  );
}

console.log(createMarkup(galleryItems));

// Добавление строки разметки в DOM дерево, метод insertAdjacentHTML, "beforebegin" - внутри elem, после всех детей
// Вызов функции reateMarkup(arr) с параметром массив объектов galleryItems

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

// Инициализация библиотеки после того как элементы галереи созданы и добавлены в ul.gallery.

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  // Добавление подписи из атрибута 'alt' и задержки появления подписи
  captionsData: 'alt',
  captionDelay: 250,
});
