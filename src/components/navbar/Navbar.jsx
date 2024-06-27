import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav">
        <ul>
          <li>
          <Link to="/products">SHOP</Link>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
          <Link to="/products">STOCKLIST</Link>
          </li>
        </ul>
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="/">LOGIN</a>
          </li>
          <li>
            <a href="/">WHISHLIST</a>
          </li>
          <li>
            <a href="/">BAG</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
