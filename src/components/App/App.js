import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Navbar from "../Navbar/Navbar.js";
import Today from "../Today/Today.js";
import Catalog from "../Catalog/Catalog.js";
import Search from "../Search/Search.js";
import Medialibrary from "../Medialibrary/Medialibrary.js";
import api from "../../utils/AnimeApi.js";
import "./App.css";

function App() {
  const [isCards, setIsCards] = useState({});
  const [isToggleHeader, setIsToggleHeader] = useState("");
  const [isTogglePage, setIsTogglePage] = useState(false);
  const [isLoadCards, setIsLoadCards] = useState(false);

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

  return (
    <>
      <main className="main">
        <section className={`page ${isTogglePage ? "page_active" : ""}`}>
          blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
          libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
          sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem
          libero volutpat nibh, nec pellentesque velit pede quis nunc.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero.
          Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut
          neque. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In dui magna, posuere eget,
          vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada
          pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta
          a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.
          Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse
          platea dictumst. Curabitur at lacus ac velit ornare lobortis.
          Curabitur a felis in nunc fringilla tristique. Morbi mattis
          ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.
          Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,
          quam. Sed hendrerit. Morbi ac felis. blandit nunc, eu sollicitudin
          urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius
          tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam.
          Pellentesque ut neque. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. In dui magna, posuere
          eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor
          malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien
          ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus
          pede. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium
          feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac
          habitasse platea dictumst. Curabitur at lacus ac velit ornare
          lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis
          ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.
          Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,
          quam. Sed hendrerit. Morbi ac felis.blandit nunc, eu sollicitudin urna
          dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius
          tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam.
          Pellentesque ut neque. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. In dui magna, posuere
          eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor
          malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien
          ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus
          pede. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium
          feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac
          habitasse platea dictumst. Curabitur at lacus ac velit ornare
          lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis
          ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.
          Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,
          quam. Sed hendrerit. Morbi ac felis.
        </section>
        <Routes>
          <Route path="*" element={<Navigate to={"/today"} replace />} />
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
                />
              </>
            }
          />
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
      </main>
      <Navbar />
    </>
  );
}

export default App;
