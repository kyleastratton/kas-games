const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);

// dark mode

const root_theme = document.querySelector(':root');
const root_btn = document.querySelector(".light-mode");
root_btn.addEventListener('click', () => {
  const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary');
  primary !== 'white' ? root_theme.style.setProperty('--primary', 'white') : root_theme.style.setProperty('--primary', '#242424');

  const secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
  secondary !== 'white' ? root_theme.style.setProperty('--secondary', 'white') : root_theme.style.setProperty('--secondary', '#1a1a1a');

  const font = getComputedStyle(document.documentElement).getPropertyValue('--font');
  font == 'white' ? root_theme.style.setProperty('--font', 'black') : root_theme.style.setProperty('--font', 'white');

  const button = getComputedStyle(document.documentElement).getPropertyValue('--button');
  button == '#242424' ? root_theme.style.setProperty('--button', 'white') : root_theme.style.setProperty('--button', '#242424');

  const buttonColor = getComputedStyle(document.documentElement).getPropertyValue('--button');
  buttonColor == 'white' ? root_theme.style.setProperty('--button-color', 'black') : root_theme.style.setProperty('--button-color', 'white');

  const card = getComputedStyle(document.documentElement).getPropertyValue('--card');
  card == '#1a1a1a' ? root_theme.style.setProperty('--card', '#459AE4') : root_theme.style.setProperty('--card', '#1a1a1a');

});
