import axios from 'axios';

async function fetchEvents() {
  try {
    const response = await axios.get('https://tasty-treats-backend.p.goit.global/api/events');
    const responseData = await response.data

    // 
    const chef1png = document.querySelector(".chef1png");
    chef1png.src = responseData[0].cook.imgUrl;

    const plate1png = document.querySelector(".plate1png");
    plate1png.src = responseData[0].topic.previewUrl;
    
    const platezoom1png = document.querySelector(".platezoom1png");
    platezoom1png.src = responseData[0].topic.imgUrl;


    //
    const chef2png = document.querySelector(".chef2png");
    chef2png.src = responseData[1].cook.imgUrl;

    const pizzapicturepng = document.querySelector(".pizzapicturepng");
    pizzapicturepng.src = responseData[1].topic.previewUrl;

    const pizzapicturezoompng = document.querySelector(".pizzapicturezoompng");
    pizzapicturezoompng.src = responseData[1].topic.imgUrl;


    //
    const chef3png = document.querySelector(".chef3png");
    chef3png.src = responseData[2].cook.imgUrl;

    const piepng = document.querySelector(".piepng");
    piepng.src = responseData[2].topic.previewUrl;

    const pizezoompng = document.querySelector(".pizezoompng");
    pizezoompng.src = responseData[2].topic.imgUrl;

  } catch (error) {
    console.error('Veri çekme sırasında bir hata oluştu:', error);
  }
}



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