window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var image = document.querySelector(".image-container img");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
    image.style.transform = "scale(1.1)";
  } else {
    navbar.classList.remove("scrolled");
    image.style.transform = "scale(1)";
  }
}

function filterItems() {
  const radios = document.querySelectorAll('.filter input[type="radio"]');
  const items = document.querySelectorAll(".grid .item");

  let selectedCategory = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedCategory = radio.value;
    }
  });

  items.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    const isBestSeller = item.getAttribute("data-bestseller") === "true";

    if (selectedCategory === "All" || selectedCategory === "") {
      item.style.display = "block";
    } else if (selectedCategory === "BestSeller" && isBestSeller) {
      item.style.display = "block";
    } else if (itemCategory === selectedCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

const scrollToFormBtn = document.getElementById("scrollToFormBtn");

const reservationForm = document.getElementById("reservationForm");

const backToTopBtn = document.getElementById("backToTopBtn");

scrollToFormBtn.addEventListener("click", () => {
  reservationForm.scrollIntoView({ behavior: "smooth" });
});
