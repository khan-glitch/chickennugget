document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("rickroll");

    // Attempt to play video with sound
    video.play().catch(error => {
        console.error("Autoplay with sound blocked:", error);
    });
});
