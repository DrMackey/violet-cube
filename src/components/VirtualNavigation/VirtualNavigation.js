import React, { useEffect, useState } from "react";
import {
  useLocation,
  Link,
  Route,
  Routes,
  Outlet,
  useParams,
} from "react-router-dom";

export default function VirtualNavigation({
  isTogglePage,
  setIsTogglePage,
  handleTogglePage,
}) {
  const [isIndexPage, setIsIndexPage] = useState();
  const location = useLocation();

  // let params = useParams();
  // console.log(params);

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
      // const newTogglePage = isTogglePage.slice();
      const newTogglePage = isTogglePage;
      newTogglePage[indexPage] = false;
      if (newTogglePage.length === 2) {
        newTogglePage[0] = false;
      }
      setIsTogglePage(newTogglePage);
      setTimeout(() => {
        const popHandler = () => {
          const a = [...newTogglePage];
          a.pop();
          return setIsTogglePage(a);
        };
        popHandler();
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
      <Outlet />
      <Routes>
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
      </Routes>
    </>
  );
}
