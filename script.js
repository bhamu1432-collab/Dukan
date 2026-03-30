function openNav(){
  document.getElementById("mySidebar").style.width="280px";
  document.getElementById("overlay").style.display="block";
}

function closeNav(){
  document.getElementById("mySidebar").style.width="0";
  document.getElementById("overlay").style.display="none";
}

/* ✨ SCROLL REVEAL */
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    let top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-80){
      el.classList.add("active");
    }
  });
});
