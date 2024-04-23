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
    console.log("Я смонтирован", location.pathname.match(/\//g).length);

    return () => {
      const indexPage = location.pathname.match(/\//g).length - 1;
      const newTogglePage = isTogglePage.slice();
      newTogglePage[indexPage] = false;
      newTogglePage[0] = false;
      setIsTogglePage(newTogglePage);
      setTimeout(() => {
        setIsTogglePage(newTogglePage.splice(indexPage, 1));
      }, 300);
      console.log("Я размонтирован", location.pathname.match(/\//g).length);
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
      {/* <Outlet /> */}
      {/* <Routes>
        <Route
          path=":titleId/*"
          element={
            <VirtualNavigation
              isTogglePage={isTogglePage}
              handleTogglePage={handleTogglePage}
              setIsTogglePage={setIsTogglePage}
            />
          }
        />
      </Routes> */}
    </>
  );
}
