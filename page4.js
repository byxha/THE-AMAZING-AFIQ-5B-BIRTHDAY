const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.5;

setTimeout(() => {

    bgMusic.pause();
    bgMusic.currentTime = 0;

}, 20000);

const envelope = document.getElementById("envelope");
const photoCard = document.getElementById("photoCard");
const hearts = document.getElementById("hearts");



envelope.onclick = function(){

    // START MUSIC
    bgMusic.play();

    envelope.style.display="none";

    createHearts();

    setTimeout(()=>{

        photoCard.classList.add("show");

    },1200);

};


photoCard.onclick=function(){


    photoCard.classList.toggle("flip");


};





function createHearts(){


    for(let i=0;i<60;i++){


        let heart=document.createElement("div");


        heart.className="heart";

        heart.innerHTML="❤️";



        heart.style.left="50%";

        heart.style.top="50%";



        heart.style.setProperty(
            "--x",
            Math.random()*700-350+"px"
        );


        heart.style.setProperty(
            "--y",
            Math.random()*700-350+"px"
        );



        hearts.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },1500);



    }


}
