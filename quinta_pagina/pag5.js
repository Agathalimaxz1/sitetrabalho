const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;
function showImage(i) {
images.forEach(img => img.classList.remove("active"));
images[i].classList.add("active");
}
nextBtn.addEventListener("click", () => { index++; if (index >= images.length) index = 0; showImage(index); });
prevBtn.addEventListener("click", () => { index--; }); if (index < 0) index = images.length - 1; showImage(index);