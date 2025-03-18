document.addEventListener("DOMContentLoaded",()=>{
    const menuBar =document.querySelector(".menu-bar");
    const nav =document.querySelector("nav"); 
    
    menuBar.addEventListener("click",()=>{
        menuBar.classList.toggle("active");
        nav.classList.toggle("active");
    })
})