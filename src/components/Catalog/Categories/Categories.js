import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <button className="categories__button">
            <div className="categories__button-icon"></div>
            <p className="categories__button-title">Драма</p>
          </button>
        </li>
        <li className="categories__item">
          <button className="categories__button">
            <div className="categories__button-icon"></div>
            <p className="categories__button-title">Романтика</p>
          </button>
        </li>
        <li className="categories__item">
          <button className="categories__button">
            <div className="categories__button-icon"></div>
            <p className="categories__button-title">Школа</p>
          </button>
        </li>
        <li className="categories__item">
          <button className="categories__button">
            <div className="categories__button-icon"></div>
            <p className="categories__button-title">Повседневность</p>
          </button>
        </li>
        <li className="categories__item">
          <button className="categories__button">
            <div className="categories__button-icon"></div>
            <p className="categories__button-title">Трагедия</p>
          </button>
        </li>
      </ul>
    </section>
  );
}
