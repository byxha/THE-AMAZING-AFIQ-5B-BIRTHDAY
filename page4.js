window.onload = function () {

    const bgMusic = document.getElementById("bgMusic");

    setTimeout(() => {
        bgMusic.pause();
        alert("Music stopped!");
    }, 5000);

};

const envelope = document.getElementById("envelope");
const photoCard = document.getElementById("photoCard");
const hearts = document.getElementById("hearts");



envelope.onclick = function(){


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
