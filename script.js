document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("chickenroll");

    // Ensure video starts from the beginning
    video.currentTime = 0;
    video.muted = false;  // Ensure sound is ON
    video.volume = 1.0;

    video.play().catch(error => {
        console.error("Autoplay with sound blocked:", error);
    });
});
