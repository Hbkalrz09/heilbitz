// Toggle Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Testimonial Auto-Switch
let testimonials = [
    '"Desainnya modern dan clean." - User 1',
    '"Website ini sangat membantu!" - User 2',
    '"Tampilan simpel dan menarik." - User 3',
    '"Sangat responsif dan cepat." - User 4',
    '"Desain elegan dan mudah digunakan." - User 5'
];
let index = 0;
setInterval(() => {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial-text").innerText = testimonials[index];
}, 5000);
