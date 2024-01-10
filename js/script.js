// toggle class active
const NavbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});
