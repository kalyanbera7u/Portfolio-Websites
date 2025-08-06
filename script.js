AOS.init({
  duration: 1000,
  once: true,
});

// Header Scroll Effect ------------------
window.addEventListener('scroll', function () {
  const header = document.querySelector('.main_header_div');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// --------------------------------------------------------


// Hero Banner Animated Text -----------------------------
const texts = document.querySelectorAll(".animated-text");
let index = 0;

function showNextLine() {
  texts.forEach((el, i) => {
    el.style.display = i === index ? "inline" : "none";
  });
  index = (index + 1) % texts.length;
}

showNextLine(); // Show the first line initially
setInterval(showNextLine, 3000); // Change every 3 seconds
// -------------------------------------------------------- 


// Mobile Responsive Menu Animated -------------------------
const mobileToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");

mobileToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active"); // Slide menu in/out
  mobileToggle.classList.toggle("cross"); // Toggle cross animation
});
// --------------------------------------------------------
