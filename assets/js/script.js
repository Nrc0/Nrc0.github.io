document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.addEventListener("mouseenter", () => {
            sec.style.transform = "scale(1.05)";
        });
        sec.addEventListener("mouseleave", () => {
            sec.style.transform = "scale(1)";
        });
    });
});
function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}


