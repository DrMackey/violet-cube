import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link
        to="/today"
        className={`navbar__link ${
          pathname === "/today" ? "navbar__link_active" : ""
        }`}
      >
        <div className="navbar__icon-container">
          <div className="navbar__icon"></div>
        </div>
        <p className="navbar__title">Сегодня</p>
      </Link>
      <Link
        to="/catalog"
        className={`navbar__link ${
          pathname === "/catalog" ? "navbar__link_active" : ""
        }`}
      >
        <div className="navbar__icon-container">
          <div className="navbar__icon"></div>
        </div>
        <p className="navbar__title">Каталог</p>
      </Link>
      <Link
        to="/medialibrary"
        className={`navbar__link ${
          pathname === "/medialibrary" ? "navbar__link_active" : ""
        }`}
      >
        <div className="navbar__icon-container">
          <div className="navbar__icon"></div>
        </div>
        <p className="navbar__title">Медиатека</p>
      </Link>
      <Link
        to="/search"
        className={`navbar__link ${
          pathname === "/search" ? "navbar__link_active" : ""
        }`}
      >
        <div className="navbar__icon-container">
          <svg
            className="navbar__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
          >
            <path d="M10.21 20.226c2.217 0 4.262-.71 5.934-1.893l6.294 6.233c.292.29.677.434 1.088.434.863 0 1.474-.657 1.474-1.5 0-.394-.133-.775-.425-1.051l-6.253-6.208a10.012 10.012 0 0 0 2.098-6.128C20.42 4.55 15.825 0 10.21 0 4.607 0 0 4.537 0 10.113c0 5.563 4.594 10.113 10.21 10.113Zm0-2.183c-4.382 0-8.006-3.59-8.006-7.93s3.624-7.93 8.006-7.93c4.381 0 8.006 3.59 8.006 7.93s-3.625 7.93-8.006 7.93Z" />
          </svg>
        </div>

        <p className="navbar__title">Поиск</p>
      </Link>
    </nav>
  );
}
