import React,{ useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../../fruitUI/dist/js/fruitui.modules";

const Header = () => {
  useEffect(() => {
    Navbar();
  },[]);
  return (
    <>
      <nav className="navbar anim-navbar anim-delay-3000ms anim-slide-top anim-mode-forwards ">
      <div className="brand">
        <Image alt="logo" width={50} height={50} src="/fruitUI.png" />
        <p>fruitUI</p>
      </div>
        <div className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/components">components</Link>
          </li>
          <li>
            <Link href="/layout">layout</Link>
          </li>
          <li>
            <Link href="/utilities">utilities</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header