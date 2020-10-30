// https://uidesigndaily.com/posts/sketch-pricing-cards-ui-design-card-day-1207

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".arrow");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("nav_show");
    return true;
  } else {
    navbar.classList.remove("nav_show");
    return false;
  }
});
// window.removeEventListener("scroll");

menu.addEventListener("click", () => {
  sidebar.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
