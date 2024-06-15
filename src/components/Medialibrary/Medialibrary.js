import React, { useEffect } from "react";
import TemplatePage from "../TemplatePage/TemplatePage.js";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Medialibrary.css";

export default function Medialibrary({
  onActivePage,
  isToggleHeader,
  // setScrollTopMain,
  // handleScrollMain,
  setIsToggleBottomPage,
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
