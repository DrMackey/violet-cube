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

        {isLoadCards
          ? onIsCards.map((card) => {
              const reg = /\*|:|%|#|&|×| |-|\$/g;
              const link = card.url.slice(8);

              return (
                <Link key={card.id} onClick={handleClick} to={`${link}`}>
                  <h2>{card.russian}</h2>
                  <img
                    src={`https://shikimori.one${card.image.x96}`}
                    alt="Изображение постера."
                  />
                </Link>
              );
            })
          : ""}
      </section>{" "}
      <section
        onScroll={handleScroll}
        className={`page ${isTogglePage ? "page_active" : ""}`}
      >
        <Outlet />
      </section>
    </>
  );
}
