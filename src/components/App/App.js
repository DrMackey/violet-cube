import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation, Outlet } from "react-router-dom";
// import VirtualNavigation from "../VirtualNavigation/VirtualNavigation.js";
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
const PAGE_STATUS_CLASSES = ["inactive", "active", "closed"];

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
  const [activePage, setActivePage] = useState([
    {
      tabActive: true,
      baseURL: ["today"],
      lastURL: [],
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
      lastURL: [],
      pagesStatus: [],
    },
    {
      tabActive: false,
      baseURL: ["search"],
      lastURL: [],
      pagesStatus: [],
    },
  ]);
  const [isToggleBottomPage, setIsToggleBottomPage] = useState(false);
  const [isLoadCards, setIsLoadCards] = useState(false);
  const [isLoadVideo, setIsLoadVideo] = useState(false);

  useEffect(() => {
    getParentLocation();
    checkScrollMain();

    // handleTabActive();
    setActivePage((prev) => handleTabActive(prev));
    // setActivePage((prev) => handleLastURL(prev));
  }, [location]);

  useEffect(() => {
    // console.log(activePage);
  }, [activePage]);

  const setHomePage = location.pathname.split("/"); // ['', 'catalog', '16498-shingeki-no-kyojin']
  setHomePage.shift(); // ['catalog', '16498-shingeki-no-kyojin']
  let indexPage;

  activePage.map((e, i) => {
    if (setHomePage[0] === e.baseURL[0]) {
      indexPage = i;
    }
  });
  // useEffect(() => {
  //   const newPagesStatus = activePage[indexPage].lastURL.map((e, i, m) => {
  //     console.log("i", i, setHomePage.length, m);
  //     if (i === setHomePage.length - 2) {
  //       return PAGE_STATUS_CLASSES[0];
  //     } else if (i === setHomePage.length - 1) {
  //       return PAGE_STATUS_CLASSES[1];
  //     } else {
  //       return PAGE_STATUS_CLASSES[2];
  //     }
  //   });
  //   activePage[indexPage].pagesStatus = newPagesStatus;
  // }, [activePage]);

  useEffect(() => {
    checkScrollMain();
  }, [scrollTopMain]);

  useEffect(() => {
    if (isTogglePage) checkScrollСontent();
  }, [scrollTopСontent]);

  // useEffect(() => {
  //   console.log("isTogglePage", isTogglePage);
  // }, [isTogglePage]);

  useEffect(() => {
    getCards();
    checkScrollMain();
    setIsLoadingDone("done");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // setIsTogglePage(generateTogglePage());
    // generateTogglePage();
  }, []);

  function generateTogglePage() {
    const preArray = new Array(location.pathname.match(/\//g).length - 1);
    const newArray = Array(preArray.length);

    return preArray.map((elm, index) => {
      console.log("preArray", preArray);
      return (newArray[index] = false);
    });
  }

  function handleTogglePage(indexPage) {
    // console.log("2.", typeof indexPage);
    const newTogglePage = isTogglePage.slice();
    newTogglePage[indexPage - 1] = true;
    newTogglePage[0] = true;
    // console.log("2.", newTogglePage);
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
    const localStatusPages = activePage.slice(); //копия массива
    const setHomePage = location.pathname.split("/");

    setHomePage.shift();
    // const newActivePages = localStatusPages.map((e) => {
    //   if (e.baseURL[0] === setHomePage[0]) {
    //     e.tabActive = true;
    //     e.lastURL = setHomePage;
    //     // console.log("e", e);
    //     const test = checkPagesStatus(e);
    //     console.log("tests", test);
    //     return test;
    //   } else {
    //     e.tabActive = false;
    //     return e;
    //   }
    // });

    // setActivePage(newActivePages);
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

    handleLastURL();
    handlePageStatus();

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
      console.log("i", i, setHomePage.length, m);
      if (i <= setHomePage.length - 2) {
        return PAGE_STATUS_CLASSES[0];
      } else if (i < setHomePage.length) {
        return PAGE_STATUS_CLASSES[1];
      } else {
        return PAGE_STATUS_CLASSES[2];
      }
    });
    // console.log("newPagesStatus", newPagesStatus);

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
        // console.log("1. ", activePage);
        // const test = (activePage[indexPage].pagesStatus[
        //   setHomePage.length - 1
        // ] = PAGE_STATUS_CLASSES[2]);
        // console.log("2. ", activePage[indexPage]);
        // console.log("sleep", activePage[indexPage].lastURL);
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
        // console.log(res);
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
      <Header
        isToggleHeader={isToggleHeader}
        isTitle="Page"
        isTogglePage={isTogglePage}
        setIsTogglePage={setIsTogglePage}
        checkHandleHeader={checkHandleHeader}
      />
      <Routes>
        <Route path="/" element={<Navigate to={"/today"} replace />} />
        <Route
          path="/:mainUrl/*"
          element={
            <>
              <Today
                onActivePage={activePage}
                setScrollTopMain={setScrollTopMain}
                handleScrollMain={handleScrollMain}
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
              <Medialibrary
                onActivePage={activePage}
                isToggleHeader={isToggleHeader}
                setScrollTopMain={setScrollTopMain}
                handleScrollMain={handleScrollMain}
                setIsToggleBottomPage={setIsToggleBottomPage}
              />
              <Search
                onActivePage={activePage}
                isToggleHeader={isToggleHeader}
                setScrollTopMain={setScrollTopMain}
                handleScrollMain={handleScrollMain}
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
