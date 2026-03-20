// Sidebar Controls
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

// Ripple Effect (Sabhi Cards par kaam karega)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (e) {
        let x = e.clientX - this.getBoundingClientRect().left;
        let y = e.clientY - this.getBoundingClientRect().top;
        
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple');
        this.appendChild(ripples);
        
        setTimeout(() => { ripples.remove(); }, 600);
    });
});

/* NOTE: Maine Full Screen View Logic (Popup) yahan se hata diya hai.
   Ab kisi bhi grid image par click karne se popup nahi aayega.
*/
