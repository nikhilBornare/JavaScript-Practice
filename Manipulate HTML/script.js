const para = document.querySelector('.text') ;
const btn = document.querySelector('.changeTextBtn');

function changeText(){
    if(para.innerText === "You clicked the button!"){
       para.innerText = "Click Button to Change Text";
    }else{
        para.innerText = "You clicked the button!"
    }
}

btn.addEventListener('click' , changeText );
