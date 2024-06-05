import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Doc } from "../../images/navbar-icons/doc.text.svg";
import { ReactComponent as Magnifyingglass } from "../../images/navbar-icons/magnifyingglass.svg";
import { ReactComponent as Play } from "../../images/navbar-icons/play.square.svg";
import { ReactComponent as Rectangle } from "../../images/navbar-icons/rectangle.grid.svg";

export default function Navbar({ onActivePage }) {
  function getToLink(index) {
    const { tabActive, baseURL, lastURL } = onActivePage[index];

    if (lastURL.length > baseURL.length && tabActive === false) {
      return "/" + lastURL.join("/");
    } else {
      return "/" + baseURL.join("/");
    }
  }

  return (
    <nav className="navbar">
      <Link
        to={getToLink(0)}
        className={`navbar__link ${
          onActivePage[0].tabActive && "navbar__link_active"
        }`}
      >
        <div className="navbar__icon-container">
          <Doc />
        </div>
        <p className="navbar__title">Сегодня</p>
      </Link>
      <Link
        to={getToLink(1)}
        className={`navbar__link ${
          onActivePage[1].tabActive && "navbar__link_active"
        }`}
      >
        <div className="navbar__icon-container">
          <Rectangle />
        </div>
        <p className="navbar__title">Каталог</p>
      </Link>
      <Link
        to={getToLink(2)}
        className={`navbar__link ${
          onActivePage[2].tabActive && "navbar__link_active"
        }`}
      >
        <div className="navbar__icon-container">
          <Play />
        </div>
        <p className="navbar__title">Медиатека</p>
      </Link>
      <Link
        to={getToLink(3)}
        className={`navbar__link ${
          onActivePage[3].tabActive && "navbar__link_active"
        }`}
      >
        <div className="navbar__icon-container">
          <Magnifyingglass />
        </div>

        <p className="navbar__title">Поиск</p>
      </Link>
    </nav>
  );
}
