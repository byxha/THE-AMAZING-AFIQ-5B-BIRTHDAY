const countdownDate = new Date(Date.now() + 5000).getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(timer);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        document.getElementById("bebanSection").classList.remove("hidden");

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);



const noBtn = document.getElementById("noBtn");

let escapeCount = 0;

function moveNoButton() {

    escapeCount++;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // lari jauh bertentangan (random jauh)
    let newX = Math.random() * (screenWidth - 150);
    let newY = Math.random() * (screenHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";

    // selepas 3 kali, dia lari keluar
    if (escapeCount >= 3) {

        noBtn.innerHTML = "🏃 NO 😭";

        noBtn.style.transition = "2s ease";

        setTimeout(() => {
            noBtn.style.left = "120vw";
            noBtn.style.top = "50vh";
        }, 100);

        setTimeout(() => {
            noBtn.remove();
        }, 2200);
    }
}


// Untuk phone + laptop
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
