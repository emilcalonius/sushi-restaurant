// Handles opening and closing of menu by clicking hamburger icon
function openMenu() {
  // Toggle between hamburger menu or x icons
  document.getElementById("menu-button").classList.toggle("change");

  // Hide or show menu
  const menu = document.getElementById("menu");
  menu.dataset.state == "open" ? menu.dataset.state = "closed" : menu.dataset.state = "open";
}

// Hide navbar when scrolling down
let prevYPos = window.pageYOffset;
window.onscroll = () => {
  let currentYpos = window.pageYOffset;
  const navbar = document.getElementById("navbar")
  prevYPos > currentYpos ? navbar.dataset.visibility = "visible" : navbar.dataset.visibility = "hidden";
  prevYPos = currentYpos;
}