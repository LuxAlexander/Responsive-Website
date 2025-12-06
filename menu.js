function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

document.querySelectorAll("#navbar .links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("active");
  });
});

const items = document.querySelectorAll('.timeline-item');

function revealItems() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < triggerBottom) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealItems);
revealItems(); // initial check
