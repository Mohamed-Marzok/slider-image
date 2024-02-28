const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
const sliderCount = sliderImages.length;
console.table(sliderImages);
let currentSlide = 1;
const slideNumber = document.getElementById("slide-number");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderCount; i++) {
  const paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.append(document.createTextNode(i));
  paginationElement.append(paginationItem);
}
const indicators = document.querySelector(".indicators");
indicators.append(paginationElement);

const paginationUlCreated = document.querySelector("#pagination-ul");

let checker = function () {
  slideNumber.textContent = `#${currentSlide} of ${sliderCount}`;
  removeActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationUlCreated.children[currentSlide - 1].classList.add("active");
  if (currentSlide === sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
};
let removeActive = function () {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  [...paginationUlCreated.children].forEach((img) => {
    img.classList.remove("active");
  });
};
checker();

nextButton.addEventListener("click", () => {
  if (currentSlide < sliderCount) {
    currentSlide++;
    checker();
  }
});

prevButton.addEventListener("click", () => {
  if (currentSlide <= sliderCount && currentSlide !== 1) {
    currentSlide--;

    checker();
  }
});

[...paginationUlCreated.children].forEach((el) => {
  el.addEventListener("click", () => {
    currentSlide = Number(el.getAttribute("data-index"));
    checker();
  });
});
