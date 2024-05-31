function Navbar() {
  const navbar = document.querySelector('.navbar')
  document.querySelector('.toggle')?.addEventListener('click', () => {
    navbar?.classList.toggle('active')
  })
}

export default Navbar
