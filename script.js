
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

// Automatically display the current year.
year.textContent = new Date().getFullYear();

// Open and close mobile navigation.
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";
});

// Close the menu after choosing a section.
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = "&#9776;";
  });
});

// Show the back-to-top button when scrolling.
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
