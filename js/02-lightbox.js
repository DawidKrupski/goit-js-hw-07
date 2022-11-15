import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement("a");
  gallery.append(link);
  link.insertAdjacentHTML(
    "beforeend",
    `<img 
        class="gallery__image"
        src=${galleryItems[i].preview}
        alt= "${galleryItems[i].description}"/>`
  );
  link.className = "gallery__item";
  link.href = `${galleryItems[i].original}`;
}
let image = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
