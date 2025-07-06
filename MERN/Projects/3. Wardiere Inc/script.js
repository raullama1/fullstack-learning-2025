const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-sidebar");
const navLinks = document.getElementById("nav-mobile-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
