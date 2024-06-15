import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import TemplatePage from "../TemplatePage/TemplatePage.js";
import Page from "../Page/Page.js";
// import VirtualNavigation from "../VirtualNavigation/VirtualNavigation.js";
import { useLocation, Link, Route, Routes } from "react-router-dom";
import Header from "../Header/Header.js";
import Titlepage from "../Titlepage/Titlepage.js";
import PreviewCards from "./PreviewCards/PreviewCards.js";
import Categories from "./Categories/Categories.js";
import CardsGroup from "../CardsGroup/CardsGroup.js";
import "./Catalog.css";

const TITLE_PAGE = "Каталог";

export default function Catalog({
  onActivePage,
  isToggleHeader,
  onIsCards,
  isLoadCards,
  isTogglePage,
  setIsTogglePage,
  setIsToggleHeader,
  handleScrollMain,
  handleScrollContent,
  // setScrollTopMain,
  setIsToggleBottomPage,

  isLoadVideo,
  getTitleData,
  getTitleVideo,
  getKodikVideo,
  isCard,
  isVideo,
  // checkScrollСontent,
  handleTogglePage,
  isRefPage,
  setIsRefPage,
  isLocation,
  setHomePage,
}) {
  const [isTitleHeader, setIsTitleHeader] = useState("Каталог");

  useEffect(() => {
    // setScrollTopMain(0);
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
    <section
      // onScroll={handleScrollMain}
      className={`main-page ${
        onActivePage[1].tabActive && "main-page_selected"
      }`}
    >
      <Header
        isTitle={TITLE_PAGE}
        isRefPage={isRefPage}
        setHomePage={setHomePage}
        indexTab={1}
      />
      <TemplatePage
        statusPage={onActivePage[1].pagesStatus[0]}
        indexPage={0}
        indexTab={1}
        isRefPage={isRefPage}
        setIsRefPage={setIsRefPage}
        // handleScrollMain={handleScrollMain}
        isLocation={isLocation}
      >
        <>
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
          <CardsGroup
            onIsCards={onIsCards}
            isLoadCards={isLoadCards}
            handleClick={handleClick}
          />
        </>
      </TemplatePage>

      {onActivePage[1].lastURL.map((el, index) => {
        if (index >= 1) {
          return (
            <TemplatePage
              key={index}
              indexPage={index}
              indexTab={1}
              statusPage={onActivePage[1].pagesStatus[index]}
              isRefPage={isRefPage}
              setIsRefPage={setIsRefPage}
              // handleScrollMain={handleScrollMain}
              isLocation={isLocation}
            >
              <Page
                key={index}
                indexPage={index}
                isStatusPage={onActivePage[1].pagesStatus}
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
                // checkScrollСontent={checkScrollСontent}
                onIsCards={onIsCards}
                isLoadCards={isLoadCards}
                handleTogglePage={handleTogglePage}
              />
            </TemplatePage>
          );
        }
      })}
    </section>
  );
}
