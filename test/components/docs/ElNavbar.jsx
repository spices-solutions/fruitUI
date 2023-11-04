import { useEffect } from 'react'
import { Navbar } from '../../../fruitUI/dist/js/fruitui.modules'
import Image from 'next/image'

const ElNavbar = () => {
  // useEffect(() => {
  //   Navbar()
  // },[])

  return (
    <>
    <nav className="navbar">
      <div className="brand">
        <Image alt="logo" width={50} height={50} src="/fruitUI.png" />
        <p>Brand Name</p>
      </div>
      <div className="toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="navbar-links">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default ElNavbar

