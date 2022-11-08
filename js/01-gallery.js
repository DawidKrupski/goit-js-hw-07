import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems[1].original);

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const div = document.createElement("div");
  gallery.append(div);
  const imagesElements = div.insertAdjacentHTML(
    "beforeend",
    `<img url=${galleryItems[i].original} alt= "${galleryItems[i].description}"/>`
  );
}
console.log(gallery);
