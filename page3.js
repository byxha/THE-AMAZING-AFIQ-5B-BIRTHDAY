const title = document.getElementById("typing-title");

if (title) {

    const text = title.textContent.trim();

    title.textContent = "";

    let i = 0;

    function typing() {

        title.textContent += text[i];

        i++;

        if (i < text.length) {
            setTimeout(typing, 80);
        }

    }

    typing();

}
