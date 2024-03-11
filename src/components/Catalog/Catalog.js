import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Titlepage from "../Titlepage/Titlepage.js";
import Categories from "./Categories/Categories.js";
import CardsGroup from "./CardsGroup/CardsGroup.js";
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
        <CardsGroup
          onIsCards={onIsCards}
          isLoadCards={isLoadCards}
          handleClick={handleClick}
        />
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
