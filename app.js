function openMenu() {
  // Toggle between hamburger menu or x icons
  document.getElementById("menu-button").classList.toggle("change");

  // Hide or show menu
  const menu = document.getElementById("menu");
  menu.style.display === "none" ? menu.style.display = "block" : menu.style.display = "none";
}