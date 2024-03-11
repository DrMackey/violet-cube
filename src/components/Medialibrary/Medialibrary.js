import React from "react";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Medialibrary.css";

export default function Medialibrary({ isToggleHeader }) {
  return (
    <>
      <Titlepage isTitle="Медиатека" isToggleHeader={isToggleHeader} />
    </>
  );
}
