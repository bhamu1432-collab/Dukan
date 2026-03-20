// Sidebar Open/Close
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

// Full Screen Image Logic (Lightbox)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('grid-img')) {
        // Create Modal if it doesn't exist
        let modal = document.getElementById('photoModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'photoModal';
            modal.className = 'modal';
            modal.innerHTML = `<img class="modal-content" id="fullImg" onclick="this.parentElement.style.display='none'">`;
            document.body.appendChild(modal);
        }
        // Show Modal
        document.getElementById('fullImg').src = e.target.src;
        modal.style.display = "flex";
        modal.onclick = function() { modal.style.display = "none"; }
    }
});
