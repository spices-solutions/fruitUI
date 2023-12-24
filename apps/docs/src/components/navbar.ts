export function navbar() {
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

  toggle?.addEventListener("", () => {});
}
