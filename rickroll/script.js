document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("rickroll");
    const unmuteBtn = document.getElementById("unmute-btn");

    // Try to play the video
    video.play().catch(() => {
        // If autoplay with sound is blocked, show the unmute button
        unmuteBtn.style.display = "block";
    });

    // Unmute video when button is clicked
    unmuteBtn.addEventListener("click", () => {
        video.muted = false;
        video.play();
        unmuteBtn.style.display = "none"; // Hide button after unmuting
    });
});
