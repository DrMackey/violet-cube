import React, { useEffect } from "react";
import Header from "../Header/Header.js";
import TemplatePage from "../TemplatePage/TemplatePage.js";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Medialibrary.css";

const TITLE_PAGE = "Медиатека";

export default function Medialibrary({
  onActivePage,
  isToggleHeader,
  // setScrollTopMain,
  // handleScrollMain,
  setIsToggleBottomPage,
  isRefPage,
  setHomePage,
}) {
  useEffect(() => {
    // setScrollTopMain(0);
  }, []);
  return (
    <>
      <section
        className={`main-page ${
          onActivePage[2].tabActive && "main-page_selected"
        }`}
        // onScroll={handleScrollMain}
      >
        {/* <Header
          isTitle={TITLE_PAGE}
          isRefPage={isRefPage}
          setHomePage={setHomePage}
          indexTab={1}
        /> */}
        {/* <TemplatePage statusPage={onActivePage[2].pagesStatus[0]}> */}
        <Titlepage
          isTitle="Медиатека"
          isToggleHeader={isToggleHeader}
          setIsToggleBottomPage={setIsToggleBottomPage}
        />
        {/* </TemplatePage> */}
      </section>
    </>
  );
}
