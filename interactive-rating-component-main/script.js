const submit=document.querySelector(".btn-submit");
const maincontainer=document.querySelector(".main-container");
const thkcontainer=document.querySelector(".thanks-container");
const reset=document.querySelector(".btn-reset");
const rates=document.querySelectorAll(".btn");
const rating=document.getElementById("rating"); 

submit.addEventListener("click",()=>{
    thkcontainer.classList.remove('hidden');
    maincontainer.classList.add('hidden');
})
reset.addEventListener("click",()=>{
    thkcontainer.classList.add('hidden');
    maincontainer.classList.remove('hidden');
})
rates.forEach((rate)=>{
   rate.addEventListener("click",()=>{
     rating.innerHTML=rate.innerHTML;
   })
})