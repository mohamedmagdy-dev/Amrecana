
let showMenuBtn = document.querySelector("header .container .langs i ");
let closeMenuBtn = document.querySelector("header .container .links_small i");
let headerMenu = document.querySelector("header .container .links_small");

let smallLinkAbout = document.querySelector("header .container .links_small ul li.drop_down");
let smallLinkAboutContent = document.querySelector("header .container .links_small ul li.drop_down ul");



showMenuBtn.onclick = () => {
  headerMenu.classList.add("active");
};

closeMenuBtn.onclick = () => {
  headerMenu.classList.remove("active");
};


smallLinkAbout.onclick = () => {
  smallLinkAboutContent.classList.toggle("active");
}

