
const navbar = document.querySelector(".wtq-navbar") as HTMLElement;
const overlay = document.querySelector(".wtq-navbar-overlay") as HTMLElement;
const toggle = document.querySelector(".wtq-toggle") as HTMLElement;

overlay?.addEventListener("click", () => {
	navbar?.classList.remove("wtq-active");
	document.body.style.overflowY = "auto";
});

toggle?.addEventListener("click", () => {
	if (navbar?.classList.contains("wtq-active")) {
		navbar?.classList.remove("wtq-active");
		document.body.style.overflowY = "auto";
	} else {
		navbar?.classList.add("wtq-active");
		document.body.style.overflowY = "hidden";
	}
});

const root = document.querySelector(":root");

document.querySelector(".theme-switcher")?.addEventListener("click", () => {
  if (root?.classList.contains("dark")) {
    root?.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    root?.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
});



