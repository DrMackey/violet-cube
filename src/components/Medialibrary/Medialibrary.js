import React, { useEffect } from "react";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Medialibrary.css";

export default function Medialibrary({
  onActivePage,
  isToggleHeader,
  setScrollTopMain,
  handleScrollMain,
  setIsToggleBottomPage,
}) {
  useEffect(() => {
    setScrollTopMain(0);
  }, []);
  return (
    <>
      <section
        className={`main-page ${
          onActivePage[2].tabActive && "main-page_selected"
        }`}
        onScroll={handleScrollMain}
      >
        <Titlepage
          isTitle="Медиатека"
          isToggleHeader={isToggleHeader}
          setIsToggleBottomPage={setIsToggleBottomPage}
        />
      </section>
    </>
  );
}
