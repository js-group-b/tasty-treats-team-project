document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("orderModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");

    if (!modal || !openModal || !closeModal) {
        console.error("Modal veya butonlar bulunamadı!");
        return; 
    }

    openModal.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
