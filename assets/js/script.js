const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
    });
});