

function openDrawer() {
  document.getElementById("drawer").style.width = "250px";
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  document.getElementById("drawer").style.width = "0";
  document.body.classList.remove("drawer-open");
}


window.addEventListener("click", function(event) {
  const drawer = document.getElementById("drawer");
  const menuIcon = document.querySelector(".menu-icon");

  
  if (drawer.style.width === "250px" && 
      !drawer.contains(event.target) &&
      !menuIcon.contains(event.target)) {
    closeDrawer();
  }
});
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("intro");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}


setInterval(function() { plusSlides(1); }, 5000);

  const panels = document.querySelectorAll('.panel-content');
  let currentIndex = 0;

  function showPanel(index) {
    panels.forEach(panel => panel.classList.remove('active'));
    panels[index].classList.add('active');
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % panels.length;
    showPanel(currentIndex);
  }, 2545); 
  document.querySelectorAll('.panel-content').forEach(panel => {
    const bg = panel.dataset.bg; 
    panel.style.setProperty('--bg-image', `url("${bg}")`);
  });

  const cards = document.querySelectorAll('.card-front');

  cards.forEach(card => {
    const numberOfDots = 6; // adjust how many dots you want

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');

      
      const size = 4 + Math.random() * 6;
      dot.style.width = dot.style.height = size + 'px';

      
      dot.style.top = Math.random() * 90 + '%';
      dot.style.left = Math.random() * 90 + '%';

      
      const colors = ['#ff6b6b', '#f0c808', '#1e90ff', '#8e44ad', '#2ecc71', '#ff8c00', '#00ced1'];
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];

      
      dot.style.animationDelay = Math.random() * 5 + 's';

      card.appendChild(dot);
    }
  });
document.querySelectorAll('.faculty-header').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('active');
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  });

  // Toggle live chat
  function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = (chatBox.style.display === "none") ? "block" : "none";
  }



