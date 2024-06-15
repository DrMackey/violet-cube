import React, { useEffect } from "react";
import TemplatePage from "../TemplatePage/TemplatePage.js";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Today.css";

export default function Today({
  onActivePage,
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
          onActivePage[0].tabActive && "main-page_selected"
        }`}
        // onScroll={handleScrollMain}
      >
        {/* <TemplatePage statusPage={onActivePage[0].pagesStatus[0]}> */}
        <Titlepage
          isTitle="Сегодня"
          isToday="28 Января"
          setIsToggleBottomPage={setIsToggleBottomPage}
        />
        <div
          className="today__card"
          style={{ backgroundColor: "#302924" }}
        ></div>
        <div
          className="today__card"
          style={{ backgroundColor: "#E35C00" }}
        ></div>
        <div
          className="today__card"
          style={{ backgroundColor: "#272727" }}
        ></div>
        {/* </TemplatePage> */}
      </section>
    </>
  );
}
