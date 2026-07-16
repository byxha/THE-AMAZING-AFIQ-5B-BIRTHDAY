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



// ================= WISH FAST TYPE EFFECT =================

// effect jalan ikut paragraph

const paragraphs = document.querySelectorAll(".wish-text p");


paragraphs.forEach((p, index) => {


    const text = p.innerHTML;


    p.innerHTML = "";


    setTimeout(() => {


        let i = 0;


        function typeWish() {


            if (i < text.length) {


                p.innerHTML += text.charAt(i);

                i++;


                setTimeout(typeWish, 3);


            }


        }


        typeWish();



    }, index * 500);



});




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
