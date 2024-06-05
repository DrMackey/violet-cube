import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NAVBAR_TABS } from "../../constants/navbar/index";

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
      {NAVBAR_TABS.map((tab, id) => {
        return (
          <Link
            key={id}
            to={getToLink(id)}
            className={`navbar__link ${
              onActivePage[id].tabActive && "navbar__link_active"
            }`}
          >
            <div className="navbar__icon-container">{tab.icon}</div>
            <p className="navbar__title">{tab.title}</p>
          </Link>
        );
      })}
    </nav>
  );
}
