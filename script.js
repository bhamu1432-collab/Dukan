// Sidebar Controls
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

// Ripple Effect for all cards
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

// Smart Popup Logic
// Yeh check karega ki page index.html toh nahi hai
const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/';

if (!isIndexPage) {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('grid-img')) {
            let modal = document.getElementById('photoModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'photoModal';
                modal.className = 'modal';
                modal.innerHTML = `<img class="modal-content" id="fullImg">`;
                document.body.appendChild(modal);
            }
            document.getElementById('fullImg').src = e.target.src;
            modal.style.display = "flex";
            modal.onclick = function() { modal.style.display = "none"; }
        }
    });
}
