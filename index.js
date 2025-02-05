document.addEventListener("DOMContentLoaded", function () {
    const boutonConnexion = document.querySelector(".connexion"); // Sélectionne le bouton connexion
    const modal = document.getElementById("loginModal"); // Sélectionne le modal
    const closeModal = document.querySelector(".close"); // Sélectionne le bouton de fermeture

    if (boutonConnexion) {
        boutonConnexion.addEventListener("click", function () {
            modal.style.display = "flex"; // Affiche le modal
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none"; // Cache le modal
        });
    }

    // Fermer le modal si on clique en dehors du contenu
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
