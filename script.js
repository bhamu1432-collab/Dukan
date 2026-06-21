/* =========================
   SIDEBAR
========================= */

function openNav() {
    document.getElementById("mySidebar").style.width = "290px";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

/* =========================
   LIVE SEARCH
========================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }

        });

    });

}

/* =========================
   CARD CLICK GLOW
========================= */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("touchstart", () => {
        triggerGlow(card);
    });

    card.addEventListener("mousedown", () => {
        triggerGlow(card);
    });

});

function triggerGlow(card) {

    card.classList.add("glow-active");

    setTimeout(() => {
        card.classList.remove("glow-active");
    }, 300);

}

/* =========================
   SPARKLE BURST
========================= */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", function (e) {

        const rect = this.getBoundingClientRect();

        for (let i = 0; i < 10; i++) {

            const sparkle = document.createElement("span");

            sparkle.classList.add("sparkle");

            sparkle.style.left =
                (e.clientX - rect.left) + "px";

            sparkle.style.top =
                (e.clientY - rect.top) + "px";

            sparkle.style.setProperty(
                "--x",
                Math.random()
            );

            sparkle.style.setProperty(
                "--y",
                Math.random()
            );

            this.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 800);

        }

    });

});

/* =========================
   GLITTER TRAIL
========================= */

let lastTime = 0;

function createSparkle(e) {

    const now = Date.now();

    if (now - lastTime < 40) return;

    lastTime = now;

    const x = e.touches
        ? e.touches[0].clientX
        : e.clientX;

    const y = e.touches
        ? e.touches[0].clientY
        : e.clientY;

    const sparkle = document.createElement("span");

    sparkle.classList.add("glitter");

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 600);

}

document.addEventListener(
    "mousemove",
    createSparkle
);

document.addEventListener(
    "touchmove",
    createSparkle
);

/* =========================
   IMAGE PREVIEW POPUP
========================= */

document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("grid-img"))
        return;

    let modal =
        document.getElementById("photoModal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "photoModal";

        modal.className = "modal";

        modal.innerHTML = `
            <img
            class="modal-content"
            id="fullImg">
        `;

        document.body.appendChild(modal);

    }

    document.getElementById(
        "fullImg"
    ).src = e.target.src;

    modal.style.display = "flex";

    modal.onclick = function () {
        modal.style.display = "none";
    };

});

/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document
.querySelectorAll(".card")
.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all .6s ease";

    observer.observe(card);

});

/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================
   HERO BUTTON EFFECT
========================= */

const heroBtn =
document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("mouseenter", () => {

        heroBtn.style.transform =
            "translateY(-3px) scale(1.03)";

    });

    heroBtn.addEventListener("mouseleave", () => {

        heroBtn.style.transform =
            "translateY(0) scale(1)";

    });

}
