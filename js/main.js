let showMenuBtn = document.querySelector("header .container .langs i ");
let closeMenuBtn = document.querySelector("header .container .links_small i");
let headerMenu = document.querySelector("header .container .links_small");

let smallLinkAbout = document.querySelector(
  "header .container .links_small ul li.drop_down"
);
let smallLinkAboutContent = document.querySelector(
  "header .container .links_small ul li.drop_down ul"
);

let brandsCards = document.querySelectorAll(
  ".brands .container .brands_cards .card"
);

showMenuBtn.onclick = () => {
  headerMenu.classList.add("active");
};

closeMenuBtn.onclick = () => {
  headerMenu.classList.remove("active");
};

smallLinkAbout.onclick = () => {
  smallLinkAboutContent.classList.toggle("active");
};

// slider in home page
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Set Auto Play Next
setInterval(() => {
  plusSlides(-1);
}, 7000);



// Brands Card Flip
Array.from(brandsCards).forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("active");
  };
});
