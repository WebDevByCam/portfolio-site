// Smooth scroll behavior for internal anchor links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-triggered reveal animations
const animatedSections = document.querySelectorAll("section, .hero");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

animatedSections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  observer.observe(section);
});

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Preloader animation
window.addEventListener('load', () => {
  const timeline = anime.timeline({
    easing: 'easeInOutQuart'
  });

  // Animate hexagon stroke
  timeline.add({
    targets: '#hex-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1500
  })
  // Fade in "C"
  .add({
    targets: '#hex-letter',
    opacity: 1,
    duration: 800
  })
  // Hide preloader and reveal main content
  .add({
    targets: '#preloader',
    opacity: 0,
    duration: 1000,
    delay: 400,
    complete: () => {
      document.getElementById('preloader').style.display = 'none';
    }
  });
});

// Nav scroll highlight
const allSections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  allSections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Close mobile menu on nav link click
const mobileNavLinks = document.querySelectorAll('#mobileNav .nav-link');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});