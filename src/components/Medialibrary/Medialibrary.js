import React, { useEffect } from "react";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Medialibrary.css";

export default function Medialibrary({
  isToggleHeader,
  setScrollTopMain,
  handleScrollMain,
  setIsToggleBottomPage
}) {
  useEffect(() => {
    setScrollTopMain(0);
  }, []);
  return (
    <>
      <section className="main-page" onScroll={handleScrollMain}>
        <Titlepage isTitle="Медиатека" isToggleHeader={isToggleHeader} setIsToggleBottomPage={setIsToggleBottomPage}/>
      </section>
    </>
  );
}
