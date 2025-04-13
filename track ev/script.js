
// Animate heading and subtitle left-right infinitely
let title = document.getElementById("hero-title");
let subtitle = document.getElementById("hero-subtitle");
let direction = 1;

function animateHero() {
  const maxOffset = 20;
  let offset = 0;

  setInterval(() => {
    offset += direction;
    if (offset >= maxOffset || offset <= -maxOffset) direction *= -1;

    title.style.transform = `translateX(${offset}px)`;
    subtitle.style.transform = `translateX(${-offset}px)`;
  }, 40); // speed control
}

animateHero(); // ✅ Moved the closing parenthesis correctly
