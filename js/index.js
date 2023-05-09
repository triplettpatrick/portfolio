let menu = document.querySelector("#hamburger");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true,
})

sr.reveal('.home-text', {delay: 200, origin: 'top'});
sr.reveal('.about-text, .projects-text, .project-grid, .contact-heading, .contact-form', {delay: 200, origin: 'top'});
sr.reveal('.home-section', {delay: 200, origin: 'top'});

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    