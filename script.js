document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Testimonial Rotator
    const testimonials = [
        { text: '"Website ini sangat membantu!"', author: "- User 1" },
        { text: '"Desainnya keren dan elegan."', author: "- User 2" },
        { text: '"Navigasi sangat mudah digunakan."', author: "- User 3" },
        { text: '"Sangat direkomendasikan!"', author: "- User 4" },
        { text: '"Layanan pelanggan sangat responsif."', author: "- User 5" },
    ];

    let currentIndex = 0;
    function updateTestimonial() {
        document.getElementById("testimonial-text").textContent = testimonials[currentIndex].text;
        document.getElementById("testimonial-author").textContent = testimonials[currentIndex].author;
        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    setInterval(updateTestimonial, 5000);
});