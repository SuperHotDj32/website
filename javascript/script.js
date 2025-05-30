// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
window.onload = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }, 3200); 
});
//work 
document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.getElementById('slider-wrapper');
  const slides = sliderWrapper.querySelectorAll('img');
  const totalSlides = slides.length;

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let currentIndex = 0;
  let slideInterval;

  function updateSlidePosition() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function startInterval() {
    slideInterval = setInterval(showNextSlide, 3000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  prevBtn.addEventListener('click', () => {
    showPrevSlide();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    showNextSlide();
    resetInterval();
  });

  updateSlidePosition();
  startInterval();
});
// Click Photos Work for full screen
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("modal-close");

  const photoImages = document.querySelectorAll(".photo-item img");

  if (!modal || !modalImg || !closeBtn || photoImages.length === 0) {
    console.warn("Modal ή εικόνες δεν βρέθηκαν στο DOM.");
    return;
  }

  photoImages.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Κουμπί "scroll to top"
  const button = document.getElementById('show');
  if (button) {
    button.addEventListener('click', scrollToTop);
  }

  // Particles background
  const particlesDiv = document.getElementById("particles-js");
  if (particlesDiv) {
    particlesDiv.style.height = `${document.body.scrollHeight}px`;

    particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
        opacity: { value: 0.5 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffff",
          opacity: 0.4,
          width: 1
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      }
    });
  }

  // Mouse animation για .home
  const homeElement = document.querySelector('.home');
  if (homeElement) {
    homeElement.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      homeElement.style.transform = `scale(1.05) translate(-${mouseX * 3}%, -${mouseY * 3}%)`;
    });

    homeElement.addEventListener('mouseleave', () => {
      homeElement.style.transform = 'scale(1) translate(0, 0)';
    });
  }

  // Scroll reveal για sections
  const revealSection = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.transition = 'transform 0.9s ease, opacity 0.9s ease';
    el.style.transform = 'translateY(100px)';
    el.style.opacity = '0';

    const reveal = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.9) {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      } else {
        el.style.transform = 'translateY(100px)';
        el.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Τρέχει και με το που φορτώνει
  };

  revealSection('.home2');
  revealSection('.home3');
  revealSection('.home4');
  revealSection('.home5');

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (hamburger && dropdownMenu) {
    hamburger.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  }
});
