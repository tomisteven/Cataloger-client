import React from "react";
import "./Header.css";
import logo from "../assets/logopng.webp";
import "./responsiveHeader.css";

const Header = () => {
  const scollEvent = (e) => {
    const position = window.pageYOffset;
    const header = document.querySelector(".header");
    if (position > 100) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  };

  window.addEventListener("scroll", scollEvent);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item disable">
            <a href="#about" className="nav-link">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#productos" className="nav-link">
              Productos
            </a>
          </li>

          <li className="nav-item disable">
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
