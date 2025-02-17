document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".switch input");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("darkMode");
        themeToggle.checked = true; 
    } else {
        document.body.classList.remove("darkMode");
        themeToggle.checked = false; 
    }

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("darkMode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("darkMode");
            localStorage.setItem("theme", "dark");
        }
    });
});
