const navbar = document.querySelector(".wtq-navbar") as HTMLElement;
const overlay = document.querySelector(".wtq-navbar-overlay") as HTMLElement;
const toggle = document.querySelector(".wtq-toggle") as HTMLElement;

overlay?.addEventListener("click", () => {
  navbar?.classList.remove("wtq-active");
  document.body.style.overflowY = "auto";
});
toggle?.addEventListener("click", () => {
  navbar?.classList.toggle("wtq-active");
  if (navbar?.classList.contains("wtq-active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark')
} else {
  document.body.classList.remove('dark')
}

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");
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
