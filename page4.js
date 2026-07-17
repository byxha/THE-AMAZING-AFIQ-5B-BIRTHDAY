const envelope = document.getElementById("envelope");
const photoCard = document.getElementById("photoCard");
const hearts = document.getElementById("hearts");


// CLICK ENVELOPE

envelope.onclick = function(){


    // hilangkan sampul

    envelope.style.display = "none";


    // keluarkan love confetti

    createHearts();



    // keluar gambar selepas confetti

    setTimeout(function(){

        photoCard.style.display = "block";

    },1500);



};




// CLICK PHOTO UNTUK FLIP

photoCard.onclick = function(){

    photoCard.classList.toggle("flip");

};





// LOVE CONFETTI FUNCTION

function createHearts(){


    for(let i = 0; i < 50; i++){


        let heart = document.createElement("div");


        heart.innerHTML = "❤️";


        heart.className = "heart";



        // keluar dari tengah sampul

        heart.style.left = "50%";

        heart.style.top = "45%";



        // arah pancutan random

        heart.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );


        heart.style.setProperty(
            "--y",
            (Math.random() * 500 - 250) + "px"
        );



        hearts.appendChild(heart);



        // buang selepas animation

        setTimeout(function(){

            heart.remove();

        },1500);


    }

}
