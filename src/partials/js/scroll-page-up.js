const scrollBtn = document.getElementById("scroll-page-up");

function DisplayHideBackToTop() {
  if (window.scrollY > 350) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
function BackToPageUp(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", DisplayHideBackToTop);

scrollBtn.addEventListener("click", s => BackToPageUp(s));