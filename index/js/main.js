//select Dom element
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNev = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBranding.classList.add("show");
    menuNev.classList.add("show");
    menu.classList.add("show");
    navItem.forEach(item => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    showMenu = false;
    menuBtn.classList.remove("close");
    menuBranding.classList.remove("show");
    menuNev.classList.remove("show");
    menu.classList.remove("show");
    navItem.forEach(item => {
      item.classList.remove("show");
    });
  }
}

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

var $html = $("body");

/***************************************************************************************
 *    Work Cited
 *    Author: Stefen from Codepen
 *    Date: 2020
 *    source: https://codepen.io/stefen
 *
 ***************************************************************************************/
// dark mode switch
$("#toggle-switch").on("change", function() {
  if (this.checked) {
    $html.addClass("dark-mode");
  } else {
    $html.removeClass("dark-mode");
  }
});
//***************************************************************************************
