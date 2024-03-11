import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import Titlepage from "../Titlepage/Titlepage.js";
import Categories from "./Categories/Categories.js";
import "./Catalog.css";

export default function Catalog({
  isToggleHeader,
  onIsCards,
  isLoadCards,
  isTogglePage,
  setIsTogglePage,
  setIsToggleHeader,
}) {
  useEffect(() => {
    // console.log("Монтирование Каталога");
    handleHeader("");
    return () => {
      setIsTogglePage(false);
      document.body.classList.remove("disabled-scroll");
    };
  }, []);

  function handleHeader(state) {
    setIsToggleHeader(state);
  }

  const handleScroll = (event) => {
    const currentScroll = event.target.scrollTop;

    if (currentScroll >= 0) {
      handleHeader("header_scroll");
      if (currentScroll > 25) {
        handleHeader("header_scroll header_scroll2");
      }
    } else {
      handleHeader("");
    }
  };

  function handleClick(card) {
    setIsTogglePage(true);
    setIsToggleHeader("header_scroll");
    document.body.classList.add("disabled-scroll");
  }

  return (
    <>
      <section
        className={`catalog__page ${
          isTogglePage ? "catalog__page_active" : ""
        }`}
      >
        <Titlepage isTitle="Каталог" isToggleHeader={isToggleHeader} />
        <Categories />

        <section className="cards-group">
          <div className="cards-group__title-container">
            <h2 className="cards-group__title">Смотрят сегодня</h2>
            <button className="cards-group__button">Все</button>
          </div>
          <ul className="cards-group__list">
            {isLoadCards
              ? onIsCards.map((card) => {
                  const link = card.url.slice(8);

                  return (
                    <li className="cards-group__item" key={card.id}>
                      <Link
                        className="card"
                        key={card.id}
                        onClick={handleClick}
                        to={`${link}`}
                      >
                        <div className="card__image-container">
                          <img
                            className="card__image"
                            src={`https://shikimori.one${card.image.x96}`}
                            alt="Изображение постера."
                          />
                        </div>
                        <div className="card__title-container">
                          <h2 className="card__title">{card.russian}</h2>
                          <p className="card__genre">{card.name}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : ""}
          </ul>
        </section>
      </section>
      <section
        onScroll={handleScroll}
        className={`page ${isTogglePage ? "page_active" : ""}`}
      >
        <Outlet />
      </section>
    </>
  );
}
