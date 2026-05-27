document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".category-nav") || document.querySelector(".nav");
    if (nav) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    }
});
