// when someone clicks the hamburger menu
// if the menu is closed, open it
// if the menu is open, close it
// .mobile-nav-toggle.open is not what hes using here

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");
console.log(mobileNavToggle, primaryNavigation)

mobileNavToggle.addEventListener("click", () => {
  primaryNavigation.classList.toggle("open");
  mobileNavToggle.classList.toggle("open");
});
