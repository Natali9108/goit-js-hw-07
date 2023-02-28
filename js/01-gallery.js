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
	event.preventDefault();
	const isImageEl = event.target.classList.contains("gallery__image");
	if (!isImageEl) {
		return;
	}
	const instance = basicLightbox.create(`
	    <img src="${event.target.dataset.source}" width="800" height="600">
	`);
	instance.show();

	galleryBoxRef.addEventListener("keydown", (event) => {
		if (event.code === "Escape") {
			instance.close();
		}
	});
}
