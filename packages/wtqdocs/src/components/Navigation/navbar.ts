const root = document.documentElement

document.querySelector('.theme-switcher')?.addEventListener('click', () => {
  if (root?.classList.contains('dark')) {
    root?.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
  }
  else {
    root?.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
  }
})

const navbarToggle = document.querySelector(".wtq-toggle")
const navbar = document.querySelector(".wtq-links")

navbarToggle?.addEventListener("click", ()=> {
  navbar?.classList.toggle("wtq-active-links")
})