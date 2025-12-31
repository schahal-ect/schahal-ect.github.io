/* NEW BIG CURSOR GLOW EFFECT */
document.addEventListener("DOMContentLoaded", function () {
    const glow = document.querySelector(".mouse-glow");

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    // Track mouse movement
    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth animation function
    function animateGlow() {
        // This math makes the glow "lag" slightly behind the mouse for smoothness
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        // Update the position
        glow.style.left = glowX + "px";
        glow.style.top = glowY + "px";

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
});