const header = document.querySelector('header')
        const menuBtn = document.querySelector('#menu-btn')
        const closeMenuBtn = document.querySelector('#close-menu-btn')

        //Toggle mobile menu on menu button click
        menuBtn.addEventListener("click", () => {
            header.classList.toggle("show-mobile-menu");
        });

        //Toggle mobile menu on close menu button click
        closeMenuBtn.addEventListener("click", () => {
            menuBtn.click();
        });


var btn= document.getElementsByClassName("btn");
var slide=document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0;i<2,i++;){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<2,i++;){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}