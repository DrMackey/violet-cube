import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation, Outlet } from "react-router-dom";
// import MediaQuery from "react-responsive";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Page from "../Page/Page.js";
import Navbar from "../Navbar/Navbar.js";
import BottomPage from "../BottomPage/BottomPage.js";
import Today from "../Today/Today.js";
import Catalog from "../Catalog/Catalog.js";
import Search from "../Search/Search.js";
import Medialibrary from "../Medialibrary/Medialibrary.js";
import api from "../../utils/AnimeApi.js";
import "./App.css";

const KODIK_TOKEN = "171ed6214cbc96e12b431da930826723";

function App() {
  const location = useLocation();

  const [isCards, setIsCards] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const [isCard, setIsCard] = useState({});
  const [isVideo, setIsVideo] = useState({});
  const [scrollTopСontent, setScrollTopСontent] = useState(Number);
  const [scrollTopMain, setScrollTopMain] = useState(Number);
  const [isToggleHeader, setIsToggleHeader] = useState("");
  const [isTogglePage, setIsTogglePage] = useState([false]);
  const [isToggleBottomPage, setIsToggleBottomPage] = useState(false);
  const [isLoadCards, setIsLoadCards] = useState(false);
  const [isLoadVideo, setIsLoadVideo] = useState(false);

  useEffect(() => {
    getParentLocation();
    checkScrollMain();
  }, [location]);

  useEffect(() => {
    checkScrollMain();
  }, [scrollTopMain]);

  useEffect(() => {
    if (isTogglePage) checkScrollСontent();
  }, [scrollTopСontent]);

  useEffect(() => {
    getCards();
    checkScrollMain();
    setIsLoadingDone("done");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function handleTogglePage(indexPage) {
    // console.log("1.", isTogglePage);
    const newTogglePage = isTogglePage.slice();
    newTogglePage[indexPage - 1] = true;
    newTogglePage[0] = true;
    console.log("2.", newTogglePage);
    setIsTogglePage(newTogglePage);
  }

  function checkScrollMain() {
    if (scrollTopMain > -1) {
      handleHeader("");
      if (scrollTopMain > 25) {
        handleHeader("header_scroll header_scroll2");
      }
    }
  }

  function checkScrollСontent() {
    if (scrollTopСontent > -500) {
      handleHeader("header_scroll");
      if (scrollTopСontent > 25) {
        handleHeader("header_scroll header_scroll2");
      }
    } else {
      handleHeader("");
    }
  }

  function getParentLocation() {
    const newArr = location.pathname.split("/");
  }

  function handleHeader(state) {
    setIsToggleHeader(state);
  }

  const handleScrollMain = (event) => {
    setScrollTopMain(event.currentTarget.scrollTop);
  };

  const handleScrollContent = (event) => {
    setScrollTopСontent(event.currentTarget.scrollTop);
  };

  function checkHandleHeader() {
    checkScrollMain();
  }

  function getCards() {
    setIsLoadCards(false);
    api
      .getInitialCards()
      .then((res) => {
        setIsCards(res);
        setIsLoadCards(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTitleData(titleUrl, setIsCard, setIsLoading) {
    setIsLoading(false);
    api
      .getTitleData(titleUrl)
      .then((res) => {
        setIsCard(res);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTitleVideo(titleId) {
    setIsLoadVideo(false);
    api
      .getTitleVideo(titleId)
      .then((res) => {
        setIsLoadVideo(true);
        console.log(res, "video");
        setIsVideo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getKodikVideo(titleId) {
    setIsLoadVideo(false);
    api
      .getKodikVideo(titleId, KODIK_TOKEN)
      .then((res) => {
        setIsVideo(res.results);
        return res;
      })
      .then((res) => {
        // console.log(res, "video", res.total);
        if (res.total > 0) {
          setIsLoadVideo(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {isLoading && (
        <div className={`loader ${isLoadingDone}`}>
          <img className="loader__img" src="./favicon.ico" alt="logo" />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Navigate to={"/today"} replace />} />
        <Route
          path="/today"
          element={
            <Today
              setScrollTopMain={setScrollTopMain}
              handleScrollMain={handleScrollMain}
              setIsToggleBottomPage={setIsToggleBottomPage}
            />
          }
        />
        <Route
          path="/catalog/*"
          element={
            <>
              <Header
                isToggleHeader={isToggleHeader}
                isTitle="Каталог"
                isTogglePage={isTogglePage}
                setIsTogglePage={setIsTogglePage}
                checkHandleHeader={checkHandleHeader}
              />
              <Catalog
                isToggleHeader={isToggleHeader}
                onIsCards={isCards}
                isLoadCards={isLoadCards}
                isTogglePage={isTogglePage}
                setIsTogglePage={setIsTogglePage}
                setIsToggleHeader={setIsToggleHeader}
                handleScrollContent={handleScrollContent}
                handleScrollMain={handleScrollMain}
                setScrollTopMain={setScrollTopMain}
                setIsToggleBottomPage={setIsToggleBottomPage}
                isLoadVideo={isLoadVideo}
                getTitleData={getTitleData}
                getKodikVideo={getKodikVideo}
                getTitleVideo={getTitleVideo}
                isCard={isCard}
                isVideo={isVideo}
                checkScrollСontent={checkScrollСontent}
                handleTogglePage={handleTogglePage}
              />
            </>
          }
        >
          {/* <Route
            path=":titleId/*"
            element={
              <Page
                isToggleHeader={isToggleHeader}
                isLoadVideo={isLoadVideo}
                setIsTogglePage={setIsTogglePage}
                isTogglePage={isTogglePage}
                setIsToggleHeader={setIsToggleHeader}
                getTitleData={getTitleData}
                getKodikVideo={getKodikVideo}
                getTitleVideo={getTitleVideo}
                isCard={isCard}
                isVideo={isVideo}
                checkScrollСontent={checkScrollСontent}
                onIsCards={isCards}
                isLoadCards={isLoadCards}
                handleTogglePage={handleTogglePage}
              />
            }
          /> */}
        </Route>
        <Route
          path="/medialibrary"
          element={
            <>
              <Header
                isToggleHeader={isToggleHeader}
                isTitle="Медиатека"
                isTogglePage={isTogglePage}
              />
              <Medialibrary
                isToggleHeader={isToggleHeader}
                setScrollTopMain={setScrollTopMain}
                handleScrollMain={handleScrollMain}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Header
                isToggleHeader={isToggleHeader}
                isTitle="Поиск"
                isSearchPage="header_search-page"
              />
              <Search
                isToggleHeader={isToggleHeader}
                setScrollTopMain={setScrollTopMain}
                handleScrollMain={handleScrollMain}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
            </>
          }
        />
      </Routes>
      <Navbar />
      <BottomPage
        isToggleBottomPage={isToggleBottomPage}
        setIsToggleBottomPage={setIsToggleBottomPage}
      />
    </>
  );
}

export default App;
