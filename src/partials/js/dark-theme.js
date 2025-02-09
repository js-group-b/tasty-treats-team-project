document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".switch input");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true; 
    } else {
        document.body.classList.remove("dark-mode");
        themeToggle.checked = false; 
    }

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});
