console.log("PAGE 3 JS RUNNING");


// ================= TITLE TYPEWRITER =================

const title = document.getElementById("typing-title");

if (title) {

    const text = title.innerText;

    title.innerText = "";

    let i = 0;

    function typeTitle() {

        if (i < text.length) {

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeTitle, 80);

        }

    }

    typeTitle();

}



// ================= WISH TYPE EFFECT =================

const paragraphs = document.querySelectorAll(".wish-text p");

let current = 0;

function typeParagraph() {

    if (current >= paragraphs.length) return;

    const p = paragraphs[current];

    const text = p.innerHTML;

    p.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            p.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 5);

        } else {

            current++;

            setTimeout(typeParagraph, 300);

        }

    }

    typing();

}

typeParagraph();

// ================= PHOTO FADE IN SCROLL =================


const photos = document.querySelectorAll(".memory");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


}, {

    threshold:0.2

});



photos.forEach(photo=>{

    observer.observe(photo);

});




// ================= BUTTON NEXT PAGE =================


const gayBtn = document.getElementById("gayBtn");


if(gayBtn){


    gayBtn.onclick = function(){


        window.location.href = "page4.html";


    }


}
