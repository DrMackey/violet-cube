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
  getKodikVideo,
  isCard,
  isVideo,
  checkScrollСontent,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSeries, setIsLoadingSeries] = useState(false);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const [isUrlVideos, setIsUrlVideos] = useState();
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
    if (isLoadVideo) {
      console.log(isVideo, "isVideo");
      setIsUrlVideos(() => getSeries(isVideo));
      setIsLoadingSeries(true);
    }
  }, [isLoadVideo]);

  useEffect(() => {
    console.log(isCard, "isCard.id");
    if (Object.keys(isCard).length !== 0) {
      getKodikVideo(isCard.id);
    }
  }, [isCard]);

  function getSeries(voiceovers) {
    return voiceovers.map((e) => {
      const lastSeason = e.last_season;
      if (lastSeason > 0) {
        const seriesObj = e.seasons[lastSeason].episodes;
        return Object.values(seriesObj);
      }
    });
  }

  return (
    // <>
    //   {isLoading && (
    <>
      <Titlepages isLoading={isLoading} isCard={isCard} />
      <Infoblock />
      <Player isUrlVideos={isUrlVideos} isLoadVideo={isLoadingSeries} />
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
