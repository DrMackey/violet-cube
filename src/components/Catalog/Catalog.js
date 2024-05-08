import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Page from "../Page/Page.js";
import VirtualNavigation from "../VirtualNavigation/VirtualNavigation.js";
import { useLocation, Link, Route, Routes } from "react-router-dom";
import Titlepage from "../Titlepage/Titlepage.js";
import PreviewCards from "./PreviewCards/PreviewCards.js";
import Categories from "./Categories/Categories.js";
import CardsGroup from "../CardsGroup/CardsGroup.js";
import "./Catalog.css";

export default function Catalog({
  isToggleHeader,
  onIsCards,
  isLoadCards,
  isTogglePage,
  setIsTogglePage,
  setIsToggleHeader,
  handleScrollMain,
  handleScrollContent,
  setScrollTopMain,
  setIsToggleBottomPage,

  isLoadVideo,
  getTitleData,
  getTitleVideo,
  getKodikVideo,
  isCard,
  isVideo,
  checkScrollСontent,
  handleTogglePage,
}) {
  useEffect(() => {
    setScrollTopMain(0);
    // console.log("Монтирование Каталога");
    // handleHeader("");
    // setIsToggleHeader((isToggleHeader["catalog"] = 0));
    return () => {
      // setIsTogglePage(false);
      document.body.classList.remove("disabled-scroll");
    };
  }, []);

  // function handleHeader(state) {
  //   setIsToggleHeader(state);
  // }

  // const handleScroll = (event) => {
  //   const currentScroll = event.target.scrollTop;

  // setIsToggleHeader({ "catalog": currentScroll });
  // setTest(currentScroll);
  // console.log(currentScroll);

  // if (currentScroll >= 0) {
  //   handleHeader("header_scroll");
  //   if (currentScroll > 25) {
  //     handleHeader("header_scroll header_scroll2");
  //   }
  // } else {
  //   handleHeader("");
  // }
  // };

  function handleClick(card) {
    const newTogglePage = isTogglePage.slice();
    newTogglePage[0] = true;
    setIsTogglePage(newTogglePage);
    setIsToggleHeader("header_scroll");
    document.body.classList.add("disabled-scroll");
  }

  return (
    <>
      <section
        onScroll={handleScrollMain}
        className={`main-page ${isTogglePage[0] && "main-page_active"}`}
      >
        <Titlepage
          isTitle="Каталог"
          isToggleHeader={isToggleHeader}
          setIsToggleBottomPage={setIsToggleBottomPage}
        />
        <Categories />
        <PreviewCards />
        <CardsGroup
          onIsCards={onIsCards}
          isLoadCards={isLoadCards}
          handleClick={handleClick}
        />
      </section>

      {isTogglePage.map((el, index) => {
        if (index > 0) {
          console.log("2. Обновил массив страниц", isTogglePage);
          return (
            <Page
              key={index}
              indexPage={index}
              isTogglePage={isTogglePage}
              isToggleHeader={isToggleHeader}
              isLoadVideo={isLoadVideo}
              setIsTogglePage={setIsTogglePage}
              setIsToggleHeader={setIsToggleHeader}
              getTitleData={getTitleData}
              getKodikVideo={getKodikVideo}
              getTitleVideo={getTitleVideo}
              isCard={isCard}
              isVideo={isVideo}
              checkScrollСontent={checkScrollСontent}
              onIsCards={onIsCards}
              isLoadCards={isLoadCards}
              handleTogglePage={handleTogglePage}
            />
          );
        }
      })}

      {/* <Outlet /> */}

      <Routes>
        <Route
          path=":titleId/*"
          element={
            <VirtualNavigation
              isTogglePage={isTogglePage}
              handleTogglePage={handleTogglePage}
              setIsTogglePage={setIsTogglePage}
            />
          }
        />
      </Routes>
    </>
  );
}
