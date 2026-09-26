const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function syncHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("menu-open", !expanded);
  document.body.classList.toggle("nav-open", !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
    document.body.classList.remove("nav-open");
  });
});

window.addEventListener("scroll", syncHeaderState, { passive: true });
syncHeaderState();
