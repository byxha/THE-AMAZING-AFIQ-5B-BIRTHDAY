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

// WISH TYPING EFFECT

const wish = document.getElementById("wish");

if (wish) {

    const paragraphs = wish.querySelectorAll("p");

    let paragraphIndex = 0;

    function typeNextParagraph(){

        if (paragraphIndex < paragraphs.length){

            const p = paragraphs[paragraphIndex];

            const text = p.innerText;

            p.innerText = "";

            let i = 0;

            function typeLetter(){

                if(i < text.length){

                    p.innerHTML += text[i];

                    i++;

                    setTimeout(typeLetter, 15);

                } else {

                    paragraphIndex++;

                    setTimeout(typeNextParagraph, 300);

                }

            }

            typeLetter();

        }

    }

    typeNextParagraph();

}
