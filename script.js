document.addEventListener("DOMContentLoaded", function () {
    // --- MENU BURGER ---
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // --- ANIMATION AU SCROLL ---
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    hiddenElements.forEach(el => observer.observe(el));

    // --- FILTRAGE DU PORTFOLIO ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioSections = document.querySelectorAll(".portfolio-section");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            portfolioSections.forEach(section => {
                section.classList.add("hidden"); // Masquer toutes les sections avec une animation
                setTimeout(() => {
                    if (category === "all" || section.classList.contains(category)) {
                        section.classList.remove("hidden"); // Afficher les bonnes sections
                    }
                }, 300); // Délai pour l'animation
            });

            // Mettre en surbrillance le bouton actif
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
function showCV(cvId) {
    const cvImage = document.getElementById(cvId);
    const cvViewer = document.getElementById("cv-viewer");
    const cvDisplay = document.getElementById("cv-display");

    cvDisplay.src = cvImage.src;
    cvViewer.style.display = "flex";
}

function closeCV() {
    document.getElementById("cv-viewer").style.display = "none";
}
function showPortfolio(file) {
    const modal = document.getElementById("portfolio-viewer");
    const iframe = document.getElementById("portfolio-display");

    // Vérifier si le fichier est un PDF ou un PPTX
    if (file.endsWith(".pdf")) {
        iframe.src = file; // Chargement direct du PDF
    } else if (file.endsWith(".pptx")) {
        iframe.src = "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(window.location.origin + "/" + file);
    }

    modal.style.display = "block";
}

// Fonction pour fermer la modale
function closePortfolio() {
    document.getElementById("portfolio-viewer").style.display = "none";
    document.getElementById("portfolio-display").src = "";
}
