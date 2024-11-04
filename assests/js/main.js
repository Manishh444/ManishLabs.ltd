
/** Navbar section code  */

let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "15px"; // Show the navbar
  } else {
    navbar.style.top = "-284px"; // Hide the navbar
  }
  prevScrollPos = currentScrollPos;
};

document.addEventListener("click", function (event) {
  const navbarCollapse = document.getElementById("navbarSupportedContent");
  const isClickInsideNavbar = navbarCollapse.contains(event.target);
  const isNavbarOpen = navbarCollapse.classList.contains("show");
  const isNavLink =
    event.target.classList.contains("nav-item") ||
    event.target.closest(".nav-item");

  // Check if the click is outside the navbar or on a nav link and the navbar is open
  if ((!isClickInsideNavbar || isNavLink) && isNavbarOpen) {
    // Close the navbar by triggering a click on the navbar toggler
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.click();
  }
});
