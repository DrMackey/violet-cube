import React, { useEffect, useState } from "react";
import { useLocation, Link, Route, Routes, Outlet } from "react-router-dom";
import Header from "../Header/Header.js";
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
  // isTogglePage,
  isToggleHeader,
  isLoadVideo,
  // setIsTogglePage,
  setIsToggleHeader,
  getTitleData,
  getKodikVideo,
  // isCard,
  isVideo,
  checkScrollСontent,
  onIsCards,
  isLoadCards,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSeries, setIsLoadingSeries] = useState(false);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const [isUrlVideos, setIsUrlVideos] = useState();
  const [isTogglePage, setIsTogglePage] = useState(false);
  const [isCard, setIsCard] = useState({});
  const location = useLocation();

  useEffect(() => {
    setIsTogglePage(true);
    document.body.classList.add("disabled-scroll");
    getTitleData(
      location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      ),
      setIsCard
    );
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

  function handleClick(card) {
    setIsTogglePage(true);
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
      <section
        key={location.pathname.slice(
          location.pathname.lastIndexOf("/"),
          location.pathname.length
        )}
        // onScroll={handleScrollContent}
        className={`content-page ${isTogglePage && "content-page_active"}`}
      >
        {/* // <> */}
        {/* //   {isLoading && ( */}
        {/* <> */}
        <Titlepages isLoading={isLoading} isCard={isCard} />
        <Infoblock />
        {/* <Player isUrlVideos={isUrlVideos} isLoadVideo={isLoadingSeries} /> */}
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
        {!isLoading && <div className={`loader ${isLoadingDone}`}></div>}

        {/* </> */}
      </section>
      <Outlet />
      <Routes>
        <Route
          path=":titleId/*"
          element={
            <Page
              isTogglePage={isTogglePage}
              isToggleHeader={isToggleHeader}
              isLoadVideo={isLoadVideo}
              setIsTogglePage={setIsTogglePage}
              setIsToggleHeader={setIsToggleHeader}
              getTitleData={getTitleData}
              getKodikVideo={getKodikVideo}
              // getTitleVideo={getTitleVideo}
              isCard={isCard}
              isVideo={isVideo}
              checkScrollСontent={checkScrollСontent}
              onIsCards={onIsCards}
              isLoadCards={isLoadCards}
            />
          }
        />
      </Routes>
    </>
  );
}
