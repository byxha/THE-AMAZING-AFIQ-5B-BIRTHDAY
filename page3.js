const title = document.getElementById("typing-title");

const text = title.innerHTML;

title.innerHTML = "";

let i = 0;

function typing() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 80);

    }

}

typing();
