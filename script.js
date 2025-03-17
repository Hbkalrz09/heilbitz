function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    let testimonials = [
        { text: '"Desainnya modern dan clean."', user: "- User 1" },
        { text: '"Sangat responsif dan cepat."', user: "- User 2" },
        { text: '"User interface yang rapi."', user: "- User 3" },
        { text: '"Warna dan animasi bagus."', user: "- User 4" },
        { text: '"Website yang menarik!"', user: "- User 5" }
    ];

    let index = 0;
    function changeTestimonial() {
        document.getElementById("testimoni-text").innerText = testimonials[index].text;
        document.getElementById("testimoni-user").innerText = testimonials[index].user;
        index = (index + 1) % testimonials.length;
    }
    setInterval(changeTestimonial, 5000);
});
