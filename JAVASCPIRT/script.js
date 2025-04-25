function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Κάνει την κύλιση να είναι ομαλή
  });
}
// Ρύθμιση ύψους ανάλογα με το μέγεθος της σελίδας
document.addEventListener("DOMContentLoaded", function () {
  const particlesDiv = document.getElementById("particles-js");
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
});
// Βεβαιωθείτε ότι το script φορτώνει σωστά και το κουμπί συνδέεται
document.addEventListener('DOMContentLoaded', function() {
  var $btn = document.getElementById('show');
  if ($btn) {
    console.log('Το κουμπί βρέθηκε!');
    $btn.addEventListener('click', function () {
      console.log('Κουμπί πατήθηκε');
      scrollToTop();  // Καλεί τη συνάρτηση scrollToTop
    });
  } else {
    console.log('Δεν βρέθηκε το κουμπί!');
  }
});
// ANIMATION WELCOME 
const homeElement = document.querySelector('.home');

// Αντί να κάνουμε πολύ μεγάλη μεγέθυνση, περιορίζουμε το scale σε 1.05 για πιο ήπιο αποτέλεσμα
homeElement.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Χρησιμοποιούμε μικρότερη μεγέθυνση (π.χ. 1.05) και μικρότερη μετατόπιση (π.χ. 3%)
    homeElement.style.transform = `scale(1.05) translate(-${mouseX * 3}%, -${mouseY * 3}%)`;
});

// Όταν φεύγει ο κέρσορας, επαναφέρουμε την εικόνα στην αρχική της κατάσταση
homeElement.addEventListener('mouseleave', () => {
    homeElement.style.transform = 'scale(1) translate(0, 0)';
});

// ANIMATION HOME2
function scrollRevealHome2() {
  const homeElement = document.querySelector('.home2');
  const rect = homeElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Όταν το στοιχείο πλησιάζει το κάτω μισό της οθόνης
  if (rect.top < windowHeight * 0.9) {
    homeElement.style.transform = 'translateY(0)';
    homeElement.style.opacity = '1';
  } else {
    // Επαναφορά όταν ο χρήστης ανεβαίνει πάνω
    homeElement.style.transform = 'translateY(100px)';
    homeElement.style.opacity = '0';
  }
}

window.addEventListener('scroll', scrollRevealHome2);

// ANIMATION HOME3
const homeElement3 = document.querySelector('.home3');
homeElement3.style.transition = 'transform 0.9s ease, opacity 0.9s ease';
homeElement3.style.transform = 'translateY(100px)'; // Στην αρχή είναι κάτω από την οθόνη
homeElement3.style.opacity = '0'; // Στην αρχή δεν είναι ορατό

function scrollRevealHome3() {
  const homeElement = document.querySelector('.home3');
  const rect = homeElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Όταν το στοιχείο πλησιάζει το κάτω μισό της οθόνης
  if (rect.top < windowHeight * 0.9) {
    homeElement.style.transform = 'translateY(0)';
    homeElement.style.opacity = '1';
  } else {
    // Επαναφορά όταν ο χρήστης ανεβαίνει πάνω
    homeElement.style.transform = 'translateY(100px)';
    homeElement.style.opacity = '0';
  }
}

window.addEventListener('scroll', scrollRevealHome3);

// ANIMATION HOME4
const homeElement4 = document.querySelector('.home4');
homeElement4.style.transition = 'transform 0.9s ease, opacity 0.9s ease';
homeElement4.style.transform = 'translateY(100px)'; // Στην αρχή είναι κάτω από την οθόνη
homeElement4.style.opacity = '0'; // Στην αρχή δεν είναι ορατό

function scrollRevealHome4() {
  const homeElement = document.querySelector('.home4');
  const rect = homeElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Όταν το στοιχείο πλησιάζει το κάτω μισό της οθόνης
  if (rect.top < windowHeight * 0.9) {
    homeElement.style.transform = 'translateY(0)';
    homeElement.style.opacity = '1';
  } else {
    // Επαναφορά όταν ο χρήστης ανεβαίνει πάνω
    homeElement.style.transform = 'translateY(100px)';
    homeElement.style.opacity = '0';
  }
}

window.addEventListener('scroll', scrollRevealHome4);
// ANIMATION HOME5
function scrollRevealHome5() {
  const homeElement = document.querySelector('.home5');
  const rect = homeElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Όταν το στοιχείο πλησιάζει το κάτω μισό της οθόνης
  if (rect.top < windowHeight * 0.9) {
    homeElement.style.transform = 'translateY(0)';
    homeElement.style.opacity = '1';
  } else {
    // Επαναφορά όταν ο χρήστης ανεβαίνει πάνω
    homeElement.style.transform = 'translateY(100px)';
    homeElement.style.opacity = '0';
  }
}

window.addEventListener('scroll', scrollRevealHome5);
const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});