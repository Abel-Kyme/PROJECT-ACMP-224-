// =========================
// Navigation Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-xmark");

  if (menuIcon && closeIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      navLinks.classList.remove("active");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    });

    // Auto-close on link click (mobile UX)
    document.querySelectorAll(".nav-links ul li a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      });
    });
  }
});

// =========================
// Register + Login Redirect Logic
// (Front-End Demo Only)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".register-container form");
  const loginForm = document.querySelector(".login-container form");

  // --- Register ---
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("registered", "true");
      alert("Registration successful!");
      window.location.href = "login.html";
    });
  }

  // --- Login ---
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const registered = localStorage.getItem("registered");
      if (registered) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
      } else {
        alert("Please register first.");
      }
    });
  }
});
// =========================
// Navigation Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-xmark");

  if (menuIcon && closeIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      navLinks.classList.remove("active");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    });

    // Auto-close menu when link clicked (mobile)
    document.querySelectorAll(".nav-links ul li a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      });
    });
  }
});

// =========================
// Register + Login Redirect Logic
// (Front-End Demo Only)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".register-container form");
  const loginForm = document.querySelector(".login-container form");

  // --- Register Page ---
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("registered", "true");
      alert("Registration successful!");
      window.location.href = "login.html";
    });
  }

  // --- Login Page ---
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const registered = localStorage.getItem("registered");
      if (registered) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        alert("Please register first.");
      }
    });
  }
});

// =========================
// Access Control for Pages
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const path = window.location.pathname;

  const isLoginPage = path.includes("login.html");
  const isRegisterPage = path.includes("register.html");

  // Protect Home / Events / Announcements / Contact
  if (!loggedIn && !isLoginPage && !isRegisterPage) {
    // If not logged in, send to login page
    window.location.href = "login.html";
  }

  // Prevent logged-in users from going back to login/register
  if (loggedIn && (isLoginPage || isRegisterPage)) {
    window.location.href = "home.html";
  }
});

