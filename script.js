// Countdown Timer for IMPACT'S 2025
function startCountdown() {
    const eventDate = new Date("February 22, 2025 00:00:00").getTime();
    
    setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Register Now Button Alert
document.getElementById("registerBtn").addEventListener("click", function () {
    alert("Registration is free! Fill out the form to participate.");
});

// Start the countdown when the page loads
window.onload = startCountdown;
