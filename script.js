let theame = document.querySelector(".Theame-chnager");
let changeLogo = document.querySelector(".logo");
let colorchange = document.querySelector("body");
let heading = document.querySelector("h1");
let navItems = document.querySelectorAll("nav-list"); 


let flag=0;

theame.addEventListener("click",function(){
   
    if(flag==1){
        theame.innerHTML="light Theame"
        flag=0;
       

        heading.style.color="white";
    colorchange.style.background="linear-gradient(0.25turn, #1F0A51, #2D1B3E)";
    changeLogo.innerHTML='<img  class="logo" src="/assets/logo-white.png" alt="">';
    }
    else{
        theame.innerHTML="Dark Theame"
        flag=1;
        
        heading.style.color="black";
        changeLogo.innerHTML='<img  class="logo" src="/assets/logo.png" alt="">';
        colorchange.style.background="linear-gradient(0.25turn, #F5EFFF, #FFFDFF)";
    }
    
})
