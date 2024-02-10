import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Catalog.css";

export default function Catalog({
  isToggleHeader,
  onIsCards,
  isLoadCards,
  isTogglePage,
  setIsTogglePage,
  setIsToggleHeader,
}) {
  const ref = useRef(null);
  useEffect(() => {
    return () => {
      setIsTogglePage(false);
      document.body.classList.remove("disabled-scroll");
    };
  }, []);

  const handleScroll = (event) => {
    console.log("User scrolled:", event.target.scrollTop);
  };

  function navigateTo(card) {
    setIsTogglePage(true);
    setIsToggleHeader("header_scroll header_scroll2");
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
        {isLoadCards
          ? onIsCards.map((card) => {
              const reg = /\*|:|%|#|&| |-|\$/g;

              return (
                <Link onClick={navigateTo} to={`${card.name.replace(reg, "")}`}>
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
        ref={ref}
        className={`page ${isTogglePage ? "page_active" : ""}`}
      >
        <Outlet />
      </section>
    </>
  );
}
