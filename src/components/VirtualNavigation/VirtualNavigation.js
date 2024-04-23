import React, { useEffect, useState } from "react";
import { useLocation, Link, Route, Routes, Outlet } from "react-router-dom";

export default function VirtualNavigation({
  isTogglePage,
  setIsTogglePage,
  handleTogglePage,
}) {
  const [isIndexPage, setIsIndexPage] = useState();
  const location = useLocation();

  useEffect(() => {
    setIsIndexPage(`${location.pathname.match(/\//g).length}`);

    // getTitleData(
    //   location.pathname.slice(
    //     location.pathname.lastIndexOf("/"),
    //     location.pathname.length
    //   ),
    //   setIsCard
    // );
    // console.log("Я смонтирован");

    return () => {
      const indexPage = location.pathname.match(/\//g).length - 1;
      const newTogglePage = isTogglePage.slice();
      newTogglePage[indexPage] = false;
      newTogglePage[0] = false;
      setIsTogglePage(newTogglePage);
      setTimeout(() => {
        setIsTogglePage(newTogglePage.splice(indexPage, 1));
      }, 300);
    };
  }, []);

  useEffect(() => {
    if (isIndexPage) {
      handleTogglePage(isIndexPage);
    }
  }, [isIndexPage]);

  return (
    <>
      {/* <div></div> */}
      {/* <Outlet />
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
              handleTogglePage={handleTogglePage}
            />
          }
        />
      </Routes> */}
    </>
  );
}
