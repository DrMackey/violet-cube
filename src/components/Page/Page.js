import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Titlepages from "./Titlepages/Titlepages.js";
import Infoblock from "./Infoblock/Infoblock.js";
import Player from "./Player/Player.js";
import Description from "./Description/Description.js";
import StudioInfo from "./StudioInfo/StudioInfo.js";
import Comments from "./Comments/Comments.js";
import FullInfoblock from "./FullInfoblock/FullInfoblock.js";
import CardsGroup from "../CardsGroup/CardsGroup.js";
import "./Page.css";

export default function Page({
  indexPage,
  isStatusPage,
  isToggleHeader,
  isLoadVideo,
  setIsTogglePage,
  isTogglePage,
  onSetIsTogglePage,
  setIsToggleHeader,
  getTitleData,
  getKodikVideo,
  // isCard,
  isVideo,
  // checkScrollСontent,
  onIsCards,
  isLoadCards,
  handleTogglePage,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [isLoadingSeries, setIsLoadingSeries] = useState(false);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const [isUrlVideos, setIsUrlVideos] = useState();
  const [isIndexPage, setIsIndexPage] = useState();
  const [isCard, setIsCard] = useState({});
  const location = useLocation();
  // const indexPage = location.pathname.match(/\//g).length - 1;
  // const indexPage = isIndexPage;

  useEffect(() => {
    setIsIndexPage(indexPage);

    document.body.classList.add("disabled-scroll");
    getTitleData(
      location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      ),
      setIsCard,
      setIsLoading
    );
    // checkScrollСontent();
    setIsLoadingDone();
    setIsLoadingDone("done");

    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    isStatusPage[indexPage] = "active";
  }, []);

  useEffect(() => {
    if (isLoadVideo) {
      // console.log(isVideo, "isVideo");
      setIsUrlVideos(() => getSeries(isVideo));
      setIsLoadingSeries(true);
    }
  }, [isLoadVideo]);

  useEffect(() => {
    if (Object.keys(isCard).length !== 0) {
      getKodikVideo(isCard.id);
    }
  }, [isCard]);

  // useEffect(() => {
  //   if (isIndexPage) {
  //     handleTogglePage(isIndexPage);
  //   }
  // }, [isIndexPage]);

  useEffect(() => {
    // console.log("3.", isTogglePage, indexPage, isTogglePage[indexPage]);
    if (isTogglePage[indexPage]) {
      setIsLoadingPage(true);
    } else {
      setIsLoadingPage(false);
      // console.log("4.", isLoadingPage);
    }
  }, [isTogglePage]);

  function handleClick(card) {
    // setIsTogglePage(true);
    setIsToggleHeader("header_scroll");
    document.body.classList.add("disabled-scroll");
  }

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
    <>
      {isLoading && (
        <>
          <Titlepages isLoading={isLoading} isCard={isCard} />
          <Infoblock />
          <Player isUrlVideos={isUrlVideos} isLoadVideo={isLoadingSeries} />
          <Description />
          <StudioInfo />
          <Comments />
          <FullInfoblock />
          <CardsGroup
            onIsCards={onIsCards}
            isLoadCards={isLoadCards}
            handleClick={handleClick}
          />
          <CardsGroup
            onIsCards={onIsCards}
            isLoadCards={isLoadCards}
            handleClick={handleClick}
          />
        </>
      )}
      {!isLoading && <div className={`loader ${isLoadingDone}`}></div>}
    </>
  );
}
