// SIDEBAR
function openNav(){
  document.getElementById("mySidebar").style.width="280px";
  document.getElementById("overlay").style.display="block";
  document.body.style.overflow="hidden";
}

function closeNav(){
  document.getElementById("mySidebar").style.width="0";
  document.getElementById("overlay").style.display="none";
  document.body.style.overflow="auto";
}

// ✨ SCROLL REVEAL (FIXED)
function revealElements(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// 💥 RIPPLE EFFECT (YOUR ORIGINAL UPGRADED)
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click', function(e){
    let x = e.clientX - this.getBoundingClientRect().left;
    let y = e.clientY - this.getBoundingClientRect().top;

    let ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(()=>ripple.remove(),500);
  });
});
