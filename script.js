// Sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

// ✨ Sparkle Effect on Card Click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (e) {
        let rect = this.getBoundingClientRect();

        for (let i = 0; i < 8; i++) {
            let sparkle = document.createElement('span');
            sparkle.classList.add('sparkle');

            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';

            sparkle.style.setProperty('--x', Math.random());
            sparkle.style.setProperty('--y', Math.random());

            this.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 800);
        }
    });
});

// ✨ Glitter Trail (Optimized)
let lastTime = 0;

function createSparkle(e) {
    let now = Date.now();
    if (now - lastTime < 40) return;
    lastTime = now;

    let x = e.touches ? e.touches[0].clientX : e.clientX;
    let y = e.touches ? e.touches[0].clientY : e.clientY;

    let sparkle = document.createElement('span');
    sparkle.classList.add('glitter');

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
}

document.addEventListener('touchmove', createSparkle);
document.addEventListener('mousemove', createSparkle);

// Photo Popup Logic
const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

if (!isHomePage) {
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

            modal.onclick = function () {
                modal.style.display = "none";
            };
        }
    });
}
