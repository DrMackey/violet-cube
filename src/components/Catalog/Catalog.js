import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Titlepage from "../Titlepage/Titlepage.js";
import "./Catalog.css";

export default function Catalog({
  isToggleHeader,
  onIsCards,
  isLoadCards,
  isTogglePage,
  setIsTogglePage,
}) {
  const [isCard, setIsCard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${isCard.name}`);
  }, [isCard]);

  function navigateTo(card) {
    setIsTogglePage(!isTogglePage);
    setIsCard(card);
  }

  return (
    <>
      <Titlepage isTitle="Каталог" isToggleHeader={isToggleHeader} />
      {isLoadCards
        ? onIsCards.map((card) => {
            return (
              <button onClick={navigateTo}>
                <div>{card.russian}</div>
                <img
                  src={`https://shikimori.one${card.image.original}`}
                  alt="Изображение постера."
                />
              </button>
            );
          })
        : ""}
    </>
  );
}
