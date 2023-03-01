import { galleryItems } from "./gallery-items.js";

const galleryBoxRef = document.querySelector(".gallery");

function createGalleryCard(galleryItems) {
	return galleryItems
		.map(
			({ original, preview, description }) =>
				`<a class="gallery__item"
	  href="${original}">
	  <img class="gallery__image"
	  src="${preview}" alt="${description}" />
	</a>`
		)
		.join("");
}

const galleryCard = createGalleryCard(galleryItems);
galleryBoxRef.insertAdjacentHTML("afterbegin", galleryCard);

galleryBoxRef.addEventListener("click", handelGalleryItemClick);

function handelGalleryItemClick(event) {
	event.preventDefault();
	const isImageEl = event.target.classList.contains("gallery__image");
	if (!isImageEl) {
		return;
	}
}

var lightbox = new SimpleLightbox(".gallery a", {});
lightbox.on("shown.simplelightbox", function () {
	console.log(lightbox);
});
