document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navFullscreen = document.querySelector(".nav-fullscreen");
    const toggleModeBtn = document.querySelectorAll(".toggle-mode");

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
});
