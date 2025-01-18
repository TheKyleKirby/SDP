// Get elements for the hamburger menu and nav links
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("navbar-links");

// Toggle dropdown menu when hamburger is clicked
hamburgerMenu.addEventListener("click", function() {
  navbarLinks.classList.toggle("show");
});
