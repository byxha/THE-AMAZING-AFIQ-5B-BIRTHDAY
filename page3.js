console.log("PAGE 3 JS RUNNING");


// TITLE TYPING

const title = document.getElementById("typing-title");

if (title) {

    const text = title.innerText;

    title.innerHTML = "";

    let i = 0;

    function typeTitle(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeTitle,80);

        }

    }

    typeTitle();

}



// WISH TYPING

const wish = document.getElementById("wish");

if(wish){

    const paragraphs = wish.querySelectorAll("p");

    let pIndex = 0;


    function typeParagraph(){

        if(pIndex < paragraphs.length){

            let p = paragraphs[pIndex];

            let text = p.innerText;

            p.innerHTML = "";

            let i = 0;


            function typing(){

                if(i < text.length){

                    p.innerHTML += text.charAt(i);

                    i++;

                    setTimeout(typing,5); // lagi laju

                }

                else{

                    pIndex++;

                    setTimeout(typeParagraph,300);

                }

            }


            typing();

        }

    }


    typeParagraph();

}
