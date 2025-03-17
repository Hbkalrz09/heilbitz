document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navFullscreen = document.querySelector(".nav-fullscreen");
    const toggleModeBtn = document.querySelectorAll(".toggle-mode");
    const testimonialText = document.getElementById("testimonial-text");

    // Toggle Fullscreen Menu
    menuToggle.addEventListener("click", function () {
        navFullscreen.classList.toggle("show");
    });

    // Toggle Dark/Light Mode
    toggleModeBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            this.textContent = document.body.classList.contains("light-mode") ? "Light Mode" : "Dark Mode";
        });
    });

    // Testimonial Slider
    const testimonials = [
        '"Website ini sangat membantu!"',
        '"Desainnya keren dan modern."',
        '"Navigasi sangat mudah digunakan."',
        '"Mode gelapnya sangat nyaman!"',
        '"Saya suka animasi smooth di sini!"'
    ];

    let index = 0;
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        testimonialText.textContent = testimonials[index];
    }, 5000);
});
