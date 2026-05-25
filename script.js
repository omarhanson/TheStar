// Initialize Scroll Animation Framework Engine (AOS)
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Unified Responsive Toggle Menu System Engine
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.querySelector('.menu-toggle i');
  
  menu.classList.toggle('active');
  
  if (menu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
  }
}