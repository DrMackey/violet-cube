import React, { useEffect } from "react";
import Header from "../Header/Header.js";
import "./Page.css";

export default function Page({
  isTogglePage,
  isToggleHeader,
  setIsTogglePage,
}) {
  // useEffect(() => {
  //   document.body.classList.add("disabled-scroll");

  //   return () => {
  //     document.body.classList.remove("disabled-scroll");
  //   };
  // }, []);

  return (
    <>
      {/* <Header
        isToggleHeader={isToggleHeader}
        isTitle="Каталог"
        isTogglePage={isTogglePage}
        setIsTogglePage={setIsTogglePage}
      />
      <section className={`page ${isTogglePage ? "page_active" : ""}`}> */}
      blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
      libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
      Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat
      nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis
      in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.
      Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis
      diam. Pellentesque ut neque. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. In dui magna,
      posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor
      malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,
      porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus
      quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea
      dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis
      in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus
      gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt
      et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis.
      blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
      libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
      Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat
      nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis
      in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.
      Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis
      diam. Pellentesque ut neque. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. In dui magna,
      posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor
      malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,
      porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus
      quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea
      dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis
      in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus
      gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt
      et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac
      felis.blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
      libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
      Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat
      nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis
      in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus.
      Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis
      diam. Pellentesque ut neque. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. In dui magna,
      posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor
      malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum,
      porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus
      quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea
      dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis
      in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus
      gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt
      et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis.
      blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
      libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.
      {/* </section> */}
    </>
  );
}
