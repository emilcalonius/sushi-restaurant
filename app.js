// Handles opening and closing of menu by clicking hamburger icon
function openMenu() {
  // Toggle between hamburger menu or x icons
  document.getElementById("menu-button").classList.toggle("change");

  // Hide or show menu
  const menu = document.getElementById("menu");
  menu.dataset.state == "open" ? menu.dataset.state = "closed" : menu.dataset.state = "open";
}