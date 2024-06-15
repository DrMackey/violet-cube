import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import "./TemplatePage.css";

export default function Page({
  children,
  indexPage,
  indexTab,
  statusPage,
  isRefPage,
  setIsRefPage,
}) {
  const [scope, animate] = useAnimate();
  let refPage = isRefPage.slice();

  const handleAnimate = (transformValue) =>
    animate(
      scope.current,
      { transform: transformValue },
      { duration: 0.3 },
      { ease: "easeInOut" }
    );

  useEffect(() => {
    handleAnimate(`translateX(0)`);

    if (indexPage > 0) {
      refPage[indexTab].headerStatus[indexPage] = "header_scroll";
    }
    setIsRefPage(refPage);

    return () => {};
  }, []);

  useEffect(() => {
    if (statusPage === "active") {
      handleAnimate(`translateX(0)`);
    } else if (statusPage === "inactive") {
      handleAnimate(`translateX(-33%)`);
    } else if (statusPage === "closed") {
      handleAnimate(`translateX(100%)`);
    }
  }, [statusPage]);

  function handleScroll(e) {
    const scrollTop = e.currentTarget.scrollTop;

    if (indexPage === 0) {
      toggleHeaderStatus(scrollTop, "", "header_scroll header_scroll2");
    } else {
      toggleHeaderStatus(
        scrollTop,
        "header_scroll",
        "header_scroll header_scroll2"
      );
    }
  }

  function toggleHeaderStatus(scrollTop, restingStatus, scrollStatus) {
    if (
      scrollTop < 25 &&
      isRefPage[indexTab].headerStatus[indexPage] === scrollStatus
    ) {
      refPage = isRefPage.slice();
      refPage[indexTab].headerStatus[indexPage] = restingStatus;
      setIsRefPage(refPage);
    } else if (
      scrollTop > 25 &&
      isRefPage[indexTab].headerStatus[indexPage] === restingStatus
    ) {
      refPage = isRefPage.slice();
      refPage[indexTab].headerStatus[indexPage] = scrollStatus;
      setIsRefPage(refPage);
    }
  }

  return (
    <section ref={scope} className={`content-page`} onScroll={handleScroll}>
      {children}
    </section>
  );
}
