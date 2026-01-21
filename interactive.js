

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

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


setInterval(function() { plusSlides(1); }, 5000);


