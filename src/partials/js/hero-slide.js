import axios from 'axios';

async function fetchEvents() {
  try {
    const response = await axios.get('https://tasty-treats-backend.p.goit.global/api/events');
    //console.log(JSON.stringify(response.data, null, 2)); // JSON verisini düzenli yazdır
  } catch (error) {
    console.error('Veri çekme sırasında bir hata oluştu:', error);
  }
}

fetchEvents();


fetchEvents();
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