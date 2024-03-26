import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import Titlepages from "./Titlepages/Titlepages.js";
import Infoblock from "./Infoblock/Infoblock.js";
import Player from "./Player/Player.js";
import Description from "./Description/Description.js";
import StudioInfo from "./StudioInfo/StudioInfo.js";
import Comments from "./Comments/Comments.js";
import FullInfoblock from "./FullInfoblock/FullInfoblock.js";
import "./Page.css";

export default function Page({
  isTogglePage,
  isToggleHeader,
  isLoadVideo,
  setIsTogglePage,
  getTitleData,
  getTitleVideo,
  isCard,
  isVideo,
  checkScrollСontent,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsTogglePage(true);
    document.body.classList.add("disabled-scroll");
    getTitleData(location.pathname.slice(8));
    checkScrollСontent();
    setIsLoadingDone();
    setIsLoadingDone("done");
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (Object.keys(isCard).length !== 0) {
      // console.log("isCard", isCard);
      setIsLoading(true);
      getTitleVideo(isCard.id);
    }
  }, [isCard]);

  return (
    // <>
    //   {isLoading && (
    <>
      <Titlepages isLoading={isLoading} isCard={isCard} />
      <Infoblock />
      <Player isVideo={isVideo} isLoadVideo={isLoadVideo} />
      <Description />
      <StudioInfo />
      <Comments />
      <FullInfoblock />
      {!isLoading && <div className={`loader ${isLoadingDone}`}></div>}
    </>
    //   )}
    // </>
  );
}
