import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header({
  isToggleHeader,
  isTitle,
  isSearchPage,
  isTogglePage,
  setIsTogglePage,
  checkHandleHeader,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // isPageHandle();
  }, [location, isToggleHeader]);

  // function getParentLocation() {
  //   const newArr = location.pathname.split("/");
  //   return newArr;
  // }

  // function isPageHandle() {
  //   if (getParentLocation().length > 1) {
  //     console.log(isToggleHeader);
  //   } else {
  //     console.log(isToggleHeader.getParentLocation());
  //     console.log(isToggleHeader);
  //   }
  // }

  // ${isToggleHeader ? "header_scroll" : ""}
  function togglePage() {
    setTimeout(() => {
      navigate(-1);
      // checkHandleHeader();
    }, 300);
    setIsTogglePage(false);

    // document.body.classList.remove("disabled-scroll");
  }

  return (
    <header
      className={`header 
      ${isToggleHeader}
      ${isSearchPage ? isSearchPage : ""}
      `}
    >
      <div className="header__title-container">
        <button
          className={`header__button ${isTogglePage ? "" : "disabled"}`}
          onClick={togglePage}
        >
          <svg
            className="header__button-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            fill="none"
          >
            <path
              fill="#0A84FF"
              d="M2 11.939c0 .382.146.707.45 1l8.759 8.568c.236.247.55.37.91.37.73 0 1.302-.56 1.302-1.302 0-.36-.146-.685-.393-.932L5.133 11.94l7.895-7.704c.247-.258.393-.584.393-.944A1.28 1.28 0 0 0 12.12 2c-.36 0-.674.124-.91.37l-8.76 8.57a1.376 1.376 0 0 0-.449.999Z"
            />
          </svg>
          <p className="header__button-subtitle">Назад</p>
        </button>
        <h1 className="header__title">{isTitle}</h1>
        <button className="header__button disabled"></button>
      </div>
      {/* {isSearchVisible ? <Searchform isToggleHeader={isToggleHeader} /> : ""} */}
    </header>
  );
}
