import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import Titlepages from "./Titlepages/Titlepages.js";
import Infoblock from "./Infoblock/Infoblock.js";
import Player from "./Player/Player.js";
import "./Page.css";

export default function Page({
  isTogglePage,
  isToggleHeader,
  setIsTogglePage,
  getTitleData,
  isCard,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("Смотрю");
  const location = useLocation();

  useEffect(() => {
    setIsTogglePage(true);
    document.body.classList.add("disabled-scroll");
    getTitleData(location.pathname.slice(8));
  }, []);

  useEffect(() => {
    if (Object.keys(isCard).length !== 0) {
      // console.log("isCard", isCard);
      setIsLoading(true);
    }
  }, [isCard]);

  return (
    <>
      {isLoading ? (
        <>
          <Titlepages
            isCard={isCard}
            selectedFruit={selectedFruit}
            setSelectedFruit={setSelectedFruit}
          />
          <Infoblock />
          <Player />
        </>
      ) : (
        ""
      )}
    </>
  );
}
