import React, { useEffect } from "react";
import "./BottomPage.css";

export default function BottomPage({isToggleBottomPage, setIsToggleBottomPage}) {

  return (
    <section className={`bottom-page ${isToggleBottomPage && "bottom-page__open"}`}>
        <div className="bottom-page__header">
            <div></div>
            <h2 className="bottom-page__header-title">Уч. Запись</h2>
            <button className="bottom-page__header-button" onClick={() => {setIsToggleBottomPage(false)}}>Готово</button>
        </div>
      
    </section>
  );
}
