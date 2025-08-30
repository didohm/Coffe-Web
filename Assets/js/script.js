const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const links = document.querySelectorAll(".links");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
  menuBtn.classList.toggle("rotate");
  if (header.classList.contains("show-mobile-menu")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
closeBtn.addEventListener("click", () => {
  menuBtn.click();
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("show-mobile-menu");
    menuBtn.classList.remove("rotate");
    document.body.style.overflow = "auto";
  });
});
