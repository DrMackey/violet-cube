import React from "react";
import "./Titlepages.css";

export default function Titlepages({
  isCard,
  selectedFruit,
  setSelectedFruit,
}) {
  return (
    <section className="page__preview">
      <div className="page__image-container">
        <img
          className="page__image"
          src={`https://shikimori.one${isCard.image.original}`}
          alt="Постер."
          loading="lazy"
        ></img>
      </div>
      <div className="page__title-container">
        <div>
          <h1 className="page__title">{isCard.russian}</h1>
          <h2 className="page__subtitle">{isCard.name}</h2>
          <p className="page__status">
            {isCard.ongoing ? "Онгоинг" : "Вышел"} | {isCard.episodes_aired}/
            {isCard.episodes}
          </p>
        </div>
        <div className="page__buttons-container">
          <div className="page__select-container">
            <button className="page__select-button">
              {selectedFruit.toUpperCase()} |
            </button>

            {/* <select
              className="page__select"
              value={selectedFruit}
              onChange={(e) => setSelectedFruit(e.target.value)}
            >
              <option value="Cмотрю" selected="">
                Cмотрю
              </option>
              <option value="Запланировано">Запланировано</option>
              <option value="Просмотрено">Просмотрено</option>
              <option value="Брошено">Брошено</option>
              <option value="Отложено">Отложено</option>
            </select> */}
            <details className="drop-down">
              <summary className="drop-down__active-button">
                <svg
                  className="drop-down__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  fill="none"
                >
                  <rect
                    width="1.294"
                    height="7.052"
                    y="2.049"
                    rx=".647"
                    transform="rotate(-45 0 2.05)"
                  />
                  <rect
                    width="1.294"
                    height="7.052"
                    x="9.068"
                    y=".964"
                    rx=".647"
                    transform="rotate(43.928 9.068 .964)"
                  />
                </svg>
              </summary>
              <details-menu>
                <div className="drop-down__list">
                  <button className="drop-down__item">Запланировано</button>
                  <button className="drop-down__item">Просмотрено</button>
                  <button className="drop-down__item">Брошено</button>
                  <button className="drop-down__item">Отложено</button>
                </div>
              </details-menu>
            </details>
          </div>
          <button className="page__download-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              fill="none"
            >
              <path
                fill="#3A82F7"
                fillRule="evenodd"
                d="M17.89 19.297c0 2.139-1.142 3.281-3.31 3.281H3.31c-2.158 0-3.31-1.133-3.31-3.281V9.785c0-2.139 1.152-3.281 3.31-3.281h2.618v2.178H3.496c-.86 0-1.318.44-1.318 1.328v9.062c0 .899.459 1.328 1.318 1.328h10.899c.85 0 1.318-.43 1.318-1.328V10.01c0-.889-.469-1.328-1.318-1.328h-2.403V6.504h2.588c2.168 0 3.31 1.142 3.31 3.281v9.512Z"
                clipRule="evenodd"
              />
              <path
                fill="#3A82F7"
                d="M8.936 0a.99.99 0 0 0-.997.977v9.697l.079 1.445-.567-.732-1.28-1.367a.89.89 0 0 0-.663-.293c-.479 0-.88.351-.88.85 0 .253.099.448.274.624l3.262 3.135c.264.254.508.351.772.351.263 0 .517-.097.771-.351l3.262-3.135a.818.818 0 0 0 .283-.625c0-.498-.4-.85-.879-.85a.875.875 0 0 0-.664.293l-1.29 1.368-.565.732.087-1.445V.977C9.941.449 9.492 0 8.936 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
