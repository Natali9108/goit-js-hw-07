// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого
//шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого
//зображення.
// Підключення скрипту і стилів бібліотеки модального вікна
//basicLightbox.
//Використовуй CDN сервіс jsdelivr і додай у проект посилання на
//мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього
//ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні
//перед відкриттям. Використовуй готову розмітку модального вікна із
//зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
const galleryBoxRef = document.querySelector(".gallery");

const createGalleryCard = ({ description, original, preview }) =>
	`<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src="${preview}"
        data-source='${original}'
        alt="${description}"
      />
    </a>
  </div>`;

const galleryCard = galleryItems.map((el) => createGalleryCard(el)).join("");

galleryBoxRef.insertAdjacentHTML("afterbegin", galleryCard);

galleryBoxRef.addEventListener("click", handelGalleryItemClick);

function handelGalleryItemClick(event) {
	const isImageEl = event.target.classList.contains("gallery__image");
	if (!isImageEl) {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

	instance.show();
}
