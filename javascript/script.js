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
// Certificates
function magnify(imgID, zoom) {
  let img = document.getElementById(imgID);
  let glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  img.parentElement.appendChild(glass);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";

  let bw = 3;
  let w = glass.offsetWidth / 2;
  let h = glass.offsetHeight / 2;

  function moveMagnifier(e) {
    e.preventDefault();
    const pos = getCursorPos(e);
    let x = pos.x;
    let y = pos.y;

    if (x > img.width - (w / zoom)) x = img.width - (w / zoom);
    if (x < w / zoom) x = w / zoom;
    if (y > img.height - (h / zoom)) y = img.height - (h / zoom);
    if (y < h / zoom) y = h / zoom;

    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    const a = img.getBoundingClientRect();
    const x = e.clientX - a.left;
    const y = e.clientY - a.top;
    return { x: x, y: y };
  }

  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("mousemove", moveMagnifier);
}

window.addEventListener("load", () => {
  document.querySelectorAll("img.zoomable").forEach((img) => {
    magnify(img.id, 2);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img.zoomable");

  images.forEach((img, index) => {
    if (!img.id) img.id = `cert${index + 1}`;
    magnify(img.id, 2);
  });
});