prompt("PLEASE INPUT USER NAME")


document.addEventListener("DOMContentLoaded",()=>{
    const menuBar =document.querySelector(".menu-bar");
    const nav =document.querySelector("nav"); 
    
    menuBar.addEventListener("click",()=>{
        menuBar.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    })
})

const svg =document.querySelector(".svg");
const BRE =document.querySelector(".BRE");
const formBtn =document.querySelector(".formBtn");
const head =document.querySelector(".hd-bg");

svg.addEventListener("click",()=>{
alert("YOU WILL BE REDIRECTED")
});
BRE.addEventListener("click",()=>{
    alert("YOU WILL BE REDIRECTED FOR MORE TECH BERRIES BEFORE THAT DO YOU KNOW THAT THERE ARE FACT BEHIND SOME TECH RUMORS")
    });
    formBtn.addEventListener("click",()=>{
        alert("THANK YOU FOR YOUR RESPONSE YOUR FEEDBACK MATTERS FOR OUR IMPROVEMENT")
        });
        // head.addEventListener("onmouseleave",()=>{
        //     prompt("PLEASE INPUT USER NAME")
        //     });
