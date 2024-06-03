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
