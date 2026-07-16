alert("SCRIPT WORKING!");

let count = 5;

let timer = setInterval(function () {
    document.getElementById("seconds").innerHTML = count;
    count--;

    if (count < 0) {
        clearInterval(timer);
        document.getElementById("bebanSection").classList.remove("hidden");
    }

}, 1000);
