import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "../Header/Header.js";
import Navbar from "../Navbar/Navbar.js";
import BottomPage from "../BottomPage/BottomPage.js";
import Today from "../Today/Today.js";
import Catalog from "../Catalog/Catalog.js";
import Search from "../Search/Search.js";
import Medialibrary from "../Medialibrary/Medialibrary.js";
import api from "../../utils/AnimeApi.js";
import "./App.css";

const KODIK_TOKEN = "171ed6214cbc96e12b431da930826723";
const PAGE_STATUS_CLASSES = ["inactive", "active", "closed"];

function App() {
  const location = useLocation();
  let indexTab = 1;

  const [isCards, setIsCards] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDone, setIsLoadingDone] = useState("");
  const [isCard, setIsCard] = useState({});
  const [isVideo, setIsVideo] = useState({});
  const [isToggleHeader, setIsToggleHeader] = useState("");
  const [isTogglePage, setIsTogglePage] = useState([false]);
  const [activePage, setActivePage] = useState([
    {
      tabActive: true,
      baseURL: ["today"],
      lastURL: ["today"],
      pagesStatus: [],
    },
    {
      tabActive: false,
      baseURL: ["catalog"],
      lastURL: ["catalog"],
      pagesStatus: [],
    },
    {
      tabActive: false,
      baseURL: ["medialibrary"],
      lastURL: ["medialibrary"],
      pagesStatus: [],
    },
    {
      tabActive: false,
      baseURL: ["search"],
      lastURL: ["search"],
      pagesStatus: [],
    },
  ]);
  const [isToggleBottomPage, setIsToggleBottomPage] = useState(false);
  const [isLoadCards, setIsLoadCards] = useState(false);
  const [isLoadVideo, setIsLoadVideo] = useState(false);
  const [isLocation, setIsLocation] = useState([]);

  const [isRefPage, setIsRefPage] = useState([
    {
      baseURL: ["today"],
      backButton: false,
      previousPage: "",
      headerStatus: [""],
    },
    {
      baseURL: ["catalog"],
      backButton: false,
      previousPage: "",
      headerStatus: [""],
    },
    {
      baseURL: ["medialibrary"],
      backButton: false,
      previousPage: "",
      headerStatus: [""],
    },
    {
      baseURL: ["search"],
      backButton: false,
      previousPage: "",
      headerStatus: [""],
    },
  ]);

  useEffect(() => {
    getParentLocation();

    setActivePage((prev) => handleTabActive(prev));
    setIsRefPage((prev) => handleHeaderActive(prev));
  }, [location]);

  useEffect(() => {
    if (isRefPage.length > isLocation.length) {
      setIsRefPage((elm) => removeDataPage(elm));
    }
  }, [isLocation]);

  const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
  setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']

  function removeDataPage(elm) {
    const copyArr = elm.slice();
    activePage.map((elm, index) => {
      if (elm.tabActive) {
        indexTab = index;
      }
    });

    copyArr[indexTab].headerStatus.splice(setHomePage.length, 1);
    console.log("deleteCopyArr", copyArr);
    return copyArr;
  }

  // let indexPage;

  useEffect(() => {
    getCards();
    setIsLoadingDone("done");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function handleTogglePage(indexPage) {
    const newTogglePage = isTogglePage.slice();
    newTogglePage[indexPage - 1] = true;
    newTogglePage[0] = true;

    setIsTogglePage(newTogglePage);
  }

  function getParentLocation() {
    const localStatusPages = activePage.slice(); //копия массива
    const setHomePage = location.pathname.split("/");

    setHomePage.shift();
    setIsLocation(setHomePage);
  }

  function handleHeaderActive(prev) {
    const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
    setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']

    const newActivePage = prev.map((e) => {
      if (setHomePage[0] === e.baseURL[0]) {
        e.backButton = false;
        return e;
      } else {
        e.tabActive = true;
        return e;
      }
    });

    handleLastURL();
    handlePageStatus();

    return newActivePage;
  }

  function handleTabActive(prev) {
    const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
    setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']

    const newActivePage = prev.map((e) => {
      if (setHomePage[0] === e.baseURL[0]) {
        e.tabActive = true;
        return e;
      } else {
        e.tabActive = false;
        return e;
      }
    });

    // handleLastURL();
    // handlePageStatus();

    return newActivePage;
  }

  function handlePageStatus() {
    const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
    setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']
    let indexPage;

    activePage.map((e, i) => {
      if (setHomePage[0] === e.baseURL[0]) {
        indexPage = i;
      }
    });

    const newPagesStatus = activePage[indexPage].lastURL.map((e, i, m) => {
      if (i <= setHomePage.length - 2) {
        return PAGE_STATUS_CLASSES[0];
      } else if (i < setHomePage.length) {
        return PAGE_STATUS_CLASSES[1];
      } else {
        return PAGE_STATUS_CLASSES[2];
      }
    });

    activePage[indexPage].pagesStatus = newPagesStatus;
  }

  function handleLastURL() {
    const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
    setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']
    let indexPage;

    activePage.map((e, i) => {
      if (setHomePage[0] === e.baseURL[0]) {
        indexPage = i;
      }
    });

    if (
      setHomePage[0] === activePage[indexPage].baseURL[0] &&
      setHomePage.length >= activePage[indexPage].lastURL.length
    ) {
      sleep(0).then(() => {
        activePage[indexPage].lastURL = setHomePage;

        setActivePage((prev) => (prev = activePage));
      });
    } else if (
      setHomePage[0] === activePage[indexPage].baseURL[0] &&
      setHomePage.length < activePage[indexPage].lastURL.length
    ) {
      sleep(300).then(() => {
        activePage[indexPage].lastURL = setHomePage;
        activePage[indexPage].pagesStatus.pop();
        setActivePage((prev) => (prev = activePage));
      });
    }
  }

  const sleep = (ms) => new Promise((res) => setTimeout(() => res(), ms));

  function getCards() {
    setIsLoadCards(false);
    api
      .getInitialCards()
      .then((res) => {
        setIsCards(res);
        setIsLoadCards(true);
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
      {/* <Header
        isToggleHeader={isToggleHeader}
        isTitle="Page"
        isTogglePage={isTogglePage}
        setIsTogglePage={setIsTogglePage}
        isRefPage={isRefPage}
        setIsRefPage={setIsRefPage}
        isLocation={isLocation}
        setHomePage={setHomePage}
        indexTab={indexTab}
      /> */}
      <Routes>
        <Route path="/" element={<Navigate to={"/today"} replace />} />
        <Route
          path="/:mainUrl/*"
          element={
            <>
              <Today
                onActivePage={activePage}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
              <Catalog
                onActivePage={activePage}
                isToggleHeader={isToggleHeader}
                onIsCards={isCards}
                isLoadCards={isLoadCards}
                isTogglePage={isTogglePage}
                setIsTogglePage={setIsTogglePage}
                setIsToggleHeader={setIsToggleHeader}
                setIsToggleBottomPage={setIsToggleBottomPage}
                isLoadVideo={isLoadVideo}
                getTitleData={getTitleData}
                getKodikVideo={getKodikVideo}
                getTitleVideo={getTitleVideo}
                isCard={isCard}
                isVideo={isVideo}
                handleTogglePage={handleTogglePage}
                isRefPage={isRefPage}
                setIsRefPage={setIsRefPage}
                isLocation={isLocation}
                setHomePage={setHomePage}
              />
              <Medialibrary
                onActivePage={activePage}
                isToggleHeader={isToggleHeader}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
              <Search
                onActivePage={activePage}
                isToggleHeader={isToggleHeader}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
            </>
          }
        />
      </Routes>
      <Navbar onActivePage={activePage} />
      <BottomPage
        isToggleBottomPage={isToggleBottomPage}
        setIsToggleBottomPage={setIsToggleBottomPage}
      />
    </>
  );
}

export default App;
