import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Page from "../Page/Page.js";
import Navbar from "../Navbar/Navbar.js";
import Today from "../Today/Today.js";
import Catalog from "../Catalog/Catalog.js";
import Search from "../Search/Search.js";
import Medialibrary from "../Medialibrary/Medialibrary.js";
import api from "../../utils/AnimeApi.js";
import "./App.css";

function App() {
  const location = useLocation();
  const [sportKeyLocation, setSportKeyLocation] = useState(location.pathname);
  const [isCards, setIsCards] = useState({});
  const [isCard, setIsCard] = useState({});

  const [isToggleHeader, setIsToggleHeader] = useState("");
  const [isTogglePage, setIsTogglePage] = useState(false);
  const [isLoadCards, setIsLoadCards] = useState(false);

  useEffect(() => {
    setSportKeyLocation(location.pathname);
    // console.log(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    getCards();
    function handleHeader(state) {
      setIsToggleHeader(state);
    }

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 14) {
        handleHeader("header_scroll");
        if (currentScroll > 25) {
          handleHeader("header_scroll header_scroll2");
        }
      } else {
        handleHeader("");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

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

  function getTitleData(titleUrl) {
    api
      .getTitleData(titleUrl)
      .then((res) => {
        setIsCard(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <MediaQuery minWidth={426}>
        <div className="desktop-info">
          <h1 className="desktop-info__title">
            Настольная версия сайта в разработке
          </h1>
        </div>
        <div className="desktop-container">
          <main className="main">
            <Routes>
              <Route path="/" element={<Navigate to={"/today"} replace />} />
              <Route path="/today" element={<Today />} />
              <Route
                path="/catalog"
                element={
                  <>
                    <Header
                      isToggleHeader={isToggleHeader}
                      isTitle="Каталог"
                      isTogglePage={isTogglePage}
                      setIsTogglePage={setIsTogglePage}
                    />
                    <Catalog
                      isToggleHeader={isToggleHeader}
                      onIsCards={isCards}
                      isLoadCards={isLoadCards}
                      isTogglePage={isTogglePage}
                      setIsTogglePage={setIsTogglePage}
                      setIsToggleHeader={setIsToggleHeader}
                    />
                  </>
                }
              >
                <Route
                  path=":titleId"
                  element={
                    <Page
                      isTogglePage={isTogglePage}
                      isToggleHeader={isToggleHeader}
                      setIsTogglePage={setIsTogglePage}
                      getTitleData={getTitleData}
                      isCard={isCard}
                    />
                  }
                />
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
                    <Medialibrary isToggleHeader={isToggleHeader} />
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
                    <Search isToggleHeader={isToggleHeader} />
                  </>
                }
              />
            </Routes>
            <Navbar />
          </main>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={425}>
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to={"/today"} replace />} />
            <Route path="/today" element={<Today />} />
            <Route
              path="/catalog"
              element={
                <>
                  <Header
                    isToggleHeader={isToggleHeader}
                    isTitle="Каталог"
                    isTogglePage={isTogglePage}
                    setIsTogglePage={setIsTogglePage}
                  />
                  <Catalog
                    isToggleHeader={isToggleHeader}
                    onIsCards={isCards}
                    isLoadCards={isLoadCards}
                    isTogglePage={isTogglePage}
                    setIsTogglePage={setIsTogglePage}
                    setIsToggleHeader={setIsToggleHeader}
                  />
                </>
              }
            >
              <Route
                path=":titleId"
                element={
                  <Page
                    isTogglePage={isTogglePage}
                    isToggleHeader={isToggleHeader}
                    setIsTogglePage={setIsTogglePage}
                    getTitleData={getTitleData}
                    isCard={isCard}
                  />
                }
              />
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
                  <Medialibrary isToggleHeader={isToggleHeader} />
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
                  <Search isToggleHeader={isToggleHeader} />
                </>
              }
            />
          </Routes>
          <Navbar />
        </main>
      </MediaQuery>
    </>
  );
}

export default App;
