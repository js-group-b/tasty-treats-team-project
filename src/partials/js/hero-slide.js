import img1 from "../../img/header-pics/chef1.png"
import img2 from "../../img/header-pics/plate1.png"
import img3 from "../../img/header-pics/platezoom.png"
import img4 from "../../img/header-pics/chef2.png"
import img5 from "../../img/header-pics/pizza-picture.png"
import img6 from "../../img/header-pics/pizza-picture-zoom.png"
import img7 from "../../img/header-pics/chef3.png"
import img8 from "../../img/header-pics/pie.png"
import img9 from "../../img/header-pics/pie-zoom.png"
const imageArr = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(()=>{
    import("../../../src/css/hero.css").then(() => {
      const slider = document.querySelector(".header-chefs-main");
      const slides = document.querySelectorAll(".slide");
      const lazyImages = document.querySelectorAll(".lazy-image");
      const indicatorsContainer = document.querySelector(".slide-button");
      
      let currentIndex = 0;
      let slideWidth = 100;
      const lazyLoad = () => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const image = entry.target;
    
              image.src = imageArr[Number(image.dataset.src)-1];

              image.classList.remove('lazy-image');
    
              observer.unobserve(image);
            }
          });
        }, {
          threshold: 0.1
        });
        lazyImages.forEach(image => observer.observe(image));
      };
    
      lazyLoad();
    
      slides.forEach((_, index) => {
          const indicator = document.createElement("div");
          indicator.classList.add("indicator");
          indicator.addEventListener("click", () => goToSlide(index));
          indicatorsContainer.appendChild(indicator);
      });
    
      const indicators = document.querySelectorAll(".indicator");
    
      function updateSlider() {
          slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
          updateIndicators();
      }
    
      function updateIndicators() {
          indicators.forEach((indicator, index) => {
              if (index === currentIndex) {
                  indicator.classList.add("active");
              } else {
                  indicator.classList.remove("active");
              }
          });
      }
    
      function goToSlide(index) {
          currentIndex = index;
          updateSlider();
      }
    
      function updateSlideWidth() {
          const sliderContainerWidth = slider.offsetWidth;
    
          if (window.innerWidth >= 1280) {
              slideWidth = (602 / sliderContainerWidth) * 100;  
          } 
          else if (window.innerWidth >= 768 && window.innerWidth < 945) {
              slideWidth = (sliderContainerWidth / 1) / sliderContainerWidth * 100;
          } 
          else {
              slideWidth = 100;
          }
          updateSlider();
      }
    
      updateSlideWidth();
      updateSlider();
    
      window.addEventListener("resize", updateSlideWidth);
    
      setInterval(() => {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlider();
      }, 5000);
      }).catch((err) => {
        console.error("CSS yüklenirken bir hata oluştu:", err);
      });
  },100)
  
});