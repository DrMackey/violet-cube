import React from "react";
import "./Titlepage.css";

export default function Titlepage({ isTitle, isToggleHeader, isToday, setIsToggleBottomPage }) {
  return (
    <div
      className={`titlepage__container ${
        isToggleHeader ? "titlepage__container_scroll" : ""
      }`}
    >
      <div className="titlepage__subtitle-container">
        <h1 className="titlepage__subtitle">{isTitle}</h1>
        <p className="titlepage__today">{isToday}</p>
      </div> 
      <button className="titlepage__profile" onClick={() => setIsToggleBottomPage(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          fill="none"
        >
          <path
            fill="#8E8E8E"
            d="M15.5 31C23.978 31 31 23.993 31 15.5 31 7.022 23.978 0 15.485 0 7.007 0 0 7.022 0 15.5 0 23.993 7.022 31 15.5 31Zm0-13.04c-2.94-.014-5.222-2.475-5.222-5.716-.015-3.061 2.296-5.612 5.222-5.612 2.91 0 5.207 2.551 5.207 5.612 0 3.241-2.281 5.747-5.207 5.717Zm0 10.504c-3.361 0-6.932-1.395-9.198-3.841 1.71-2.58 5.147-4.066 9.198-4.066 4.006 0 7.457 1.455 9.183 4.066-2.266 2.446-5.822 3.841-9.183 3.841Z"
          />
        </svg>
      </button>
    </div>
  );
}
