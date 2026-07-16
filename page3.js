const title = document.getElementById("typing-title");

if (title) {

    const text = title.innerText;

    title.innerText = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            title.innerText += text[i];

            i++;

            setTimeout(typing, 80);

        }

    }

    typing();

}
