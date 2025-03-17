document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navFullscreen = document.querySelector(".nav-fullscreen");
    const toggleModeBtn = document.querySelector(".toggle-mode");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialName = document.getElementById("testimonial-name");

    // Toggle Fullscreen Menu
    menuToggle.addEventListener("click", function () {
        navFullscreen.classList.toggle("show");
    });

    // Toggle Dark/Light Mode
    toggleModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        this.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
    });

    // Testimonial Slider
    const testimonials = [
        { text: '"Website ini sangat membantu!"', name: "- User 1" },
        { text: '"Desainnya keren dan modern."', name: "- User 2" },
        { text: '"Navigasi sangat mudah digunakan."', name: "- User 3" },
        { text: '"Mode gelapnya sangat nyaman!"', name: "- User 4" },
        { text: '"Saya suka animasi smooth di sini!"', name: "- User 5" }
    ];

    let index = 0;
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        testimonialText.textContent = testimonials[index].text;
        testimonialName.textContent = testimonials[index].name;
    }, 5000);
});
