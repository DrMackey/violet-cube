import React, { useEffect, useState } from "react";
import { useLocation, Link, Route, Routes, Outlet } from "react-router-dom";

export default function VirtualNavigation({ isTogglePage, handleTogglePage }) {
  const [isIndexPage, setIsIndexPage] = useState();
  const location = useLocation();

  useEffect(() => {
    setIsIndexPage(`${Object.keys(isTogglePage).length}`);

    // getTitleData(
    //   location.pathname.slice(
    //     location.pathname.lastIndexOf("/"),
    //     location.pathname.length
    //   ),
    //   setIsCard
    // );
    console.log("Я смонтирован");

    return () => console.log("Я размонтирован");
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
