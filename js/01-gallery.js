import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const clickElement = (event) => {
  event.preventDefault();
};

gallery.addEventListener("click", clickElement);

for (let i = 0; i < galleryItems.length; i++) {
  const div = document.createElement("div");
  gallery.append(div);
  const link = document.createElement("a");
  div.append(link);
  link.insertAdjacentHTML(
    "beforeend",
    `<img 
    class="gallery__image"
    src=${galleryItems[i].preview}
    data-source=${galleryItems[i].original} alt= "${galleryItems[i].description}"/>`
  );
  div.className = "gallery__item";
  link.className = "gallery__link";
  link.href = `${galleryItems[i].original}`;
}
