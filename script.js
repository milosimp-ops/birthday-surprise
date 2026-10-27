
const balloonContainer = document.getElementById("balloons");
const confettiContainer = document.getElementById("confetti");
const wishButton = document.getElementById("wishButton");
const birthdayMessage = document.getElementById("birthdayMessage");
const backButton = document.getElementById("backButton");


const colours = [
    "#ff5caa",
    "#ffd166",
    "#7bdff2",
    "#b8f28b",
    "#c9a0ff",
    "#ff9478"
];

// Create floating balloons when the page loads.
for (let i = 0; i < 18; i++) {
    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const colour = colours[i % colours.length];

    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.backgroundColor = colour;
    balloon.style.color = colour;
    balloon.style.animationDuration = (9 + Math.random() * 10) + "s";
    balloon.style.animationDelay = (-Math.random() * 15) + "s";
    balloon.style.transform = "scale(" + (0.7 + Math.random() * 0.7) + ")";

    balloonContainer.appendChild(balloon);
}

// Make a burst of colourful confetti.
function launchConfetti() {
    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.backgroundColor =
            colours[Math.floor(Math.random() * colours.length)];

        piece.style.animationDuration = (2 + Math.random() * 3) + "s";
        piece.style.animationDelay = (Math.random() * 1.5) + "s";
        piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";

        confettiContainer.appendChild(piece);

        piece.addEventListener("animationend", function () {
            piece.remove();
        });
    }
}

// Start the celebration as soon as the website opens.
window.addEventListener("load", function () {
    launchConfetti();
});

// Reveal the birthday wish when the button is clicked.
wishButton.addEventListener("click", function () {
    birthdayMessage.classList.remove("hidden");
    wishButton.textContent = "Surprise opened! 💖";
    wishButton.disabled = true;

    launchConfetti();

    birthdayMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});



backButton.addEventListener("click", function () {
    // Hide the birthday message again.
    birthdayMessage.classList.add("hidden");

    // Restore the original surprise button.
    wishButton.textContent = "Open your birthday surprise 🎁";
    wishButton.disabled = false;

    // Return to the birthday heading.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
