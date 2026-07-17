console.log("JS START");

const stars = document.querySelector(".stars");

if (stars) {

    for (let i = 0; i < 80; i++) {

        let star = document.createElement("span");

        star.innerHTML = "✦";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);
    }

}


const countdownDate = new Date("July 19, 2026 00:00:00").getTime();


setInterval(function () {

    const now = new Date().getTime();

    const distance = countdownDate - now;


    if (distance > 0) {

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


    } else {


        // ulang countdown 5 saat selepas tarikh berlalu

        const fiveSec =
        5 - (Math.floor(Date.now() / 1000) % 6);


        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = fiveSec;


        document.getElementById("bebanSection").classList.remove("hidden");

    }


}, 1000);


const noBtn = document.getElementById("noBtn");

if (noBtn) {

let escapeCount = 0;

noBtn.onclick = function(event) {

    escapeCount++;

    if (escapeCount < 3) {

        noBtn.style.position = "fixed";
        noBtn.style.transition = "0.4s ease";

        let moveX;
        let moveY;

        if (event.clientX < window.innerWidth / 2) {
            moveX = window.innerWidth - 180;
        } else {
            moveX = 50;
        }

        if (event.clientY < window.innerHeight / 2) {
            moveY = window.innerHeight - 120;
        } else {
            moveY = 50;
        }

        noBtn.style.left = moveX + "px";
        noBtn.style.top = moveY + "px";

    } else {

        noBtn.classList.add("running");

        const buttonPosition = noBtn.getBoundingClientRect();

        if (buttonPosition.left < window.innerWidth / 2) {
            noBtn.style.setProperty("--escape-direction", "120vw");
        } else {
            noBtn.style.setProperty("--escape-direction", "-120vw");
        }

        setTimeout(() => {
            noBtn.remove();
        }, 6000);

    }

};

}

const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {

yesBtn.addEventListener("click", function() {
    window.location.href = "page2.html";
});
}
