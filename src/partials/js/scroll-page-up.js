const scrollBtn = document.getElementById("ScrollPageUp");

function displayHideBackToTop() {
  if (window.scrollY > 350) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
function backToPageUp(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollBtn.style.display = "none";
window.addEventListener("scroll", displayHideBackToTop);

scrollBtn.addEventListener("click", s => backToPageUp(s));