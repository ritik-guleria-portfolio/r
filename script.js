// ==== Toggle Navbar for Mobile ====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// ==== Scroll Section Active Link ====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Remove navbar on scroll (for mobile)
  navbar.classList.remove('active');
};

document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".skill-fill");
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.animation = 'none';
      fill.offsetHeight; // reflow
      fill.style.animation = '';
      fill.style.width = width;
    }, 300);
  });
});
