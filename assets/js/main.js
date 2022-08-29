const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove nav Mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// scrollreveal
const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(".home-data", { origin: "top", delay: 400 });
sr.reveal(".home-img", { origin: "bottom", delay: 600 });
sr.reveal(".home-footer", { origin: "bottom", delay: 800 });
