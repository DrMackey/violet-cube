import React from "react";
import "./Searchform.css";

export default function Searchform({ isToggleHeader }) {
  return (
    <>
      <div
        className={`search__form-container ${
          isToggleHeader ? "search__form-container_scroll" : ""
        }`}
      >
        <form className="search__form">
          <svg
            className="search__icon-container"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path
              className="search__icon"
              d="M6.383 13.377a6.363 6.363 0 0 0 3.71-1.196l3.935 3.935a.947.947 0 0 0 .681.274c.54 0 .921-.415.921-.946a.901.901 0 0 0-.265-.665l-3.91-3.917a6.358 6.358 0 0 0 1.312-3.869c0-3.51-2.872-6.383-6.384-6.383C2.88.61 0 3.474 0 6.993c0 3.512 2.872 6.384 6.383 6.384Zm0-1.378c-2.739 0-5.005-2.266-5.005-5.006 0-2.739 2.266-5.005 5.005-5.005 2.74 0 5.006 2.266 5.006 5.005 0 2.74-2.266 5.006-5.006 5.006Z"
            />
          </svg>
          <input
            className="search__input"
            placeholder="Аниме, жанры, описание и др."
          ></input>
        </form>
      </div>
    </>
  );
}
