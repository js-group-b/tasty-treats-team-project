document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("orderModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const imitationButton = document.getElementById("imitation");

    if (!modal || !openModal || !closeModal) {
        console.error("Modal veya butonlar bulunamadı!");
        return;  
    }

    function OpenModalHandler(event) {
        event.preventDefault(); 
        modal.style.display = "flex";

        document.addEventListener("keydown", ESCKeyHandler);

        modal.addEventListener("click", OutsideClickHandler);
    }

    function CloseModalHandler() {
        modal.style.display = "none";

        document.removeEventListener("keydown", ESCKeyHandler);
        modal.removeEventListener("click", OutsideClickHandler);
    }

    function ESCKeyHandler(event) {
        if (event.key === "Escape") {
            CloseModalHandler();
        }
    }

    function OutsideClickHandler(event) {
        if (event.target === modal) {
            CloseModalHandler();
        }
    }

    openModal.addEventListener("click", OpenModalHandler);
    closeModal.addEventListener("click", CloseModalHandler);
     imitationButton.addEventListener("click", OpenModalHandler);
});