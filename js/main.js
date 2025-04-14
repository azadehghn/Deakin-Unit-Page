document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".main-nav") &&
      navLinks.classList.contains("active")
    ) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Mobile dropdown toggles
  const dropdowns = document.querySelectorAll(".dropdown");

  if (window.innerWidth <= 768) {
    dropdowns.forEach((dropdown) => {
      const link = dropdown.querySelector("a");

      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");

          // Close other dropdowns
          dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active");
            }
          });
        }
      });
    });
  }

  // Sticky header on scroll
  const header = document.querySelector(".main-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("sticky");

      // Hide header on scroll down, show on scroll up
      if (window.scrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    } else {
      header.classList.remove("sticky");
      header.style.transform = "translateY(0)";
    }

    lastScrollY = window.scrollY;
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        window.scrollTo({
          top: target.offsetTop - 80, // Account for header height
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          menuToggle.classList.remove("active");
          navLinks.classList.remove("active");
        }
      }
    });
  });

  // Add animation on scroll
  const animatedElements = document.querySelectorAll(
    ".program-card, .news-card, .research-content"
  );

  const animateOnScroll = function () {
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate");
      }
    });
  };

  // Run once on page load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});
