import * as React from "react";
import "./header-menu.scss";


const HeaderMenu = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <a className="nav-bar__logo-link">
          <img src="..\..\images\logo.png" alt="логотип"/>
        </a>
        <ul className="menu nav-bar__menu">
          <li className="menu__item"><a className="menu_link" href="#profile">Работы</a></li>
          <li className="menu__item"><a className="menu_link" href="#services">Услуги</a></li>
          <li className="menu__item"><a className="menu_link" href="#advantages">Преимущества</a></li>
          <li className="menu__item"><a className="menu_link" href="#team">Команда</a></li>
        </ul>
      </nav>
      <a className="header__phone-link" href="tel:+380676297972">+ 380 (67) 629 79 72</a>
    </div>
  );
};

export default HeaderMenu;
