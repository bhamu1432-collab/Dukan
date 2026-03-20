// 1. Sidebar Controls
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

// 2. Ripple Effect (Sabhi Cards par chalega)
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

// 3. Smart Popup Logic
// Yeh sirf tabhi chalega jab hum index.html par NAHI honge
if (window.location.pathname.indexOf('index.html') === -1 && window.location.pathname !== '/') {
    
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('grid-img')) {
            let modal = document.getElementById('photoModal');
            
            // Agar modal pehle se nahi bana toh banao
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'photoModal';
                modal.className = 'modal';
                modal.innerHTML = `<img class="modal-content" id="fullImg">`;
                document.body.appendChild(modal);
            }
            
            // Image source set karo aur dikhao
            document.getElementById('fullImg').src = e.target.src;
            modal.style.display = "flex";
            
            // Modal band karne ke liye
            modal.onclick = function() { modal.style.display = "none"; }
        }
    });
}
