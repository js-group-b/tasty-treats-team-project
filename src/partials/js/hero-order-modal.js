document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("orderModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");

    if (!modal || !openModal || !closeModal) {
        console.error("Modal veya butonlar bulunamadı!");
        return;  
    }

    function openModalHandler(event) {
        event.preventDefault(); 
        modal.style.display = "flex";

        document.addEventListener("keydown", escKeyHandler);

        modal.addEventListener("click", outsideClickHandler);
    }

    function closeModalHandler() {
        modal.style.display = "none";

        document.removeEventListener("keydown", escKeyHandler);
        modal.removeEventListener("click", outsideClickHandler);
    }

    function escKeyHandler(event) {
        if (event.key === "Escape") {
            closeModalHandler();
        }
    }

    function outsideClickHandler(event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    }

    openModal.addEventListener("click", openModalHandler);
    closeModal.addEventListener("click", closeModalHandler);
});