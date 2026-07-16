const title = document.getElementById("typing-title");

console.log("JS jalan");

if (title) {

    const text = "Breaking News: Jeybey Girl Falls for Keyel Boy";

    title.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        title.innerHTML += text[i];

        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }

    }, 200);

}
