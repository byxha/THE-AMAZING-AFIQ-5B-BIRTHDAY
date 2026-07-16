console.log("PAGE 3 JS RUNNING");


// ================= TITLE TYPEWRITER =================

const title = document.getElementById("typing-title");

if (title) {

    const text = title.innerText;

    title.innerHTML = "";

    let i = 0;

    function typeTitle(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeTitle, 80); // title speed

        }

    }

    typeTitle();

}




// ================= WISH TYPEWRITER =================


const paragraphs = document.querySelectorAll(".wish-text p");


paragraphs.forEach((p,index)=>{


    const text = p.innerHTML;

    p.innerHTML = "";

    p.style.opacity = "1";


    let i = 0;


    function typeWish(){


        if(i < text.length){


            p.innerHTML += text.charAt(i);


            i++;


            setTimeout(typeWish,5); // lagi laju


        }


    }


    setTimeout(typeWish,index * 800);


});






// ================= PHOTO FADE IN =================


const photos = document.querySelectorAll(".memory");


const observer = new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{threshold:0.2});



photos.forEach(photo=>{

    observer.observe(photo);

});
