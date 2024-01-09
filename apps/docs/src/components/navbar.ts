const navbar = document.querySelector(".wtq-navbar") as HTMLElement;
const overlay = document.querySelector(".wtq-navbar-overlay") as HTMLElement;
const toggle = document.querySelector(".wtq-toggle") as HTMLElement;

overlay?.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  navbar?.classList.remove("wtq-active");
});

toggle?.addEventListener("click", () => {
  if (navbar?.classList.contains("wtq-active")) {
    navbar?.classList.remove("wtq-active");
    document.body.style.overflowY = "hidden";
  } else {
    navbar?.classList.add("wtq-active");
    document.body.style.overflowY = "auto";
  }
});


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark')
} else {
  document.body.classList.remove('dark')
}

document.querySelector(".theme-swicher")?.addEventListener("click", () => {
  if (document.body?.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  }
});



let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => {
  const screenWidth = window.innerWidth;
  const swipeThresholdPercentage = 0.2; // 20% of the screen width

  const swipeThreshold = screenWidth * swipeThresholdPercentage;

  if (touchEndX - touchStartX > swipeThreshold) {
    navbar?.classList.add('wtq-active');
    document.body.style.overflowY = 'hidden';
  } else {
    navbar?.classList.remove('wtq-active');
    document.body.style.overflowY = 'auto';
  }
});
