document.addEventListener("DOMContentLoaded",()=>{
    const menuBar =document.querySelector(".menu-bar");
    const nav =document.querySelector("nav"); 
    
    menuBar.addEventListener("click",()=>{
        menuBar.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    })
})

const svg =document.querySelector(".svg");
const formBtn =document.querySelector(".formBtn");
const head =document.querySelector(".hd-bg");
let answer = prompt;

svg.addEventListener("click",()=>{
alert("YOU WILL BE REDIRECTED")
});
const BRE =document.querySelector(".BRE");
BRE.addEventListener("click",()=>{
    alert("YOU WILL BE REDIRECTED FOR MORE TECH BERRIES BEFORE THAT DO YOU KNOW THAT THERE ARE FACT BEHIND SOME TECH RUMORS")
    });
    formBtn.addEventListener("click",()=>{
     alert("THANK YOU FOR YOUR RESPONSE YOUR FEEDBACK MATTERS FOR OUR IMPROVEMENT")
  });
  const submit =document.querySelector("formBtn")
  const Name =document.getElementById("fname");
 Name.addEventListener("click",()=>{
if(fname === ""){
    alert("input a name")
}})