import React, { useEffect, useState } from "react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import "./Player.css";

export default function Player({ isUrlVideos, isLoadVideo }) {
  const [selectedFruit, setSelectedFruit] = useState("KODIK");
  const localCurrentSlide = { index: Number };
  // const lastSeason = isVideo[0].last_season;
  // const seriesObj = isVideo[0].seasons[lastSeason].episodes;
  const maxEpisodes = 3;

  useEffect(() => {
    if (isLoadVideo) {
      console.log(isUrlVideos[0].length, "isLoadVideo");
    }
  }, [isLoadVideo]);

  return (
    <section className="player">
      {isLoadVideo && (
        <Carousel
          totalSlides={isUrlVideos[0].length}
          visibleSlides={1}
          trayPadding={"15px"}
          slideMargin={5}
          onSlide={({ currentSlide }) => {
            localCurrentSlide.index = currentSlide;
          }}
        >
          <Slider>
            {isUrlVideos[0].map((e, i) => {
              console.log(e, "video");
              const link = e;
              return (
                <Slide key={i}>
                  <div className="player__li">
                    <div className="player__li-content">
                      {maxEpisodes > i ? (
                        <iframe
                          title={i}
                          className="player__video player__video_iframe"
                          src={link}
                          frameborder="0"
                          scrolling="no"
                          allowfullscreen
                        ></iframe>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
        </Carousel>
      )}
      <div className="player__nav">
        <div className="player__series">
          <div className="player__series-title-container">
            <p className="player__series-title">
              Серия
              <span className="player__series-title-span">
                {localCurrentSlide.index}
              </span>
              /<span>{isLoadVideo ? isUrlVideos[0].length : "0"}</span>
            </p>
            <p className="player__time-watch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="8"
                fill="none"
              >
                <path
                  fill="#8D8D92"
                  d="M5.501 6.267c.591 0 1.093-.22 1.505-.662.413-.441.619-.977.619-1.607s-.207-1.165-.62-1.605a1.99 1.99 0 0 0-1.506-.66c-.591 0-1.093.22-1.505.662-.413.44-.619.977-.619 1.607s.207 1.165.62 1.605c.414.44.916.66 1.506.66Zm-.004-.774c-.39 0-.72-.145-.99-.436a1.5 1.5 0 0 1-.407-1.06c0-.416.136-.768.41-1.057.272-.289.603-.433.993-.433s.72.145.99.436a1.5 1.5 0 0 1 .407 1.06c0 .416-.136.768-.41 1.057a1.316 1.316 0 0 1-.993.433ZM5.5 8a5.365 5.365 0 0 1-3.3-1.107C1.217 6.156.483 5.191 0 4c.483-1.191 1.217-2.156 2.2-2.893A5.365 5.365 0 0 1 5.5 0c1.217 0 2.317.369 3.3 1.107.983.737 1.717 1.702 2.2 2.893-.483 1.191-1.217 2.156-2.2 2.893A5.365 5.365 0 0 1 5.5 8Zm-.002-.8c1.01 0 1.937-.291 2.783-.873A5.567 5.567 0 0 0 10.212 4a5.572 5.572 0 0 0-1.929-2.327A4.795 4.795 0 0 0 5.503.8c-1.01 0-1.938.291-2.784.873A5.657 5.657 0 0 0 .775 4a5.662 5.662 0 0 0 1.942 2.327 4.795 4.795 0 0 0 2.78.873Z"
                />
              </svg>
              <span className="player__time-watch-span">13:25</span>
            </p>
          </div>
          <div className="voice-acting">
            <details className="voice-acting">
              <summary className="voice-acting__active-button">
                <div className="voice-acting__active-button-title-container">
                  <p className="voice-acting__title">Animedia</p>
                  <svg
                    className="voice-acting__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="8"
                    fill="none"
                  >
                    <rect
                      width="1.294"
                      height="7.052"
                      y="2.049"
                      rx=".647"
                      transform="rotate(-45 0 2.05)"
                    />
                    <rect
                      width="1.294"
                      height="7.052"
                      x="9.068"
                      y=".964"
                      rx=".647"
                      transform="rotate(43.928 9.068 .964)"
                    />
                  </svg>
                </div>
              </summary>
              <details-menu>
                <div className="voice-acting__list">
                  <button className="voice-acting__item">Anilibria</button>
                  <button className="voice-acting__item">AniDUB</button>
                </div>
              </details-menu>
            </details>
          </div>
        </div>
        <div className="player-choice">
          <details className="player-select">
            <summary className="player-select__active-button">
              <div className="player-select__active-button-title-container">
                <p className="player-select__title">{selectedFruit}</p>
                <svg
                  className="player-select__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  fill="none"
                >
                  <rect
                    width="1.294"
                    height="7.052"
                    y="2.049"
                    rx=".647"
                    transform="rotate(-45 0 2.05)"
                  />
                  <rect
                    width="1.294"
                    height="7.052"
                    x="9.068"
                    y=".964"
                    rx=".647"
                    transform="rotate(43.928 9.068 .964)"
                  />
                </svg>
              </div>
              <p className="player-choice__subtitle">Встроенная реклама</p>
            </summary>
            <details-menu>
              <div className="player-select__list">
                <button
                  className="player-select__item"
                  onClick={() => setSelectedFruit("KODIK")}
                >
                  KODIK
                </button>
                <button
                  className="player-select__item"
                  onClick={() => setSelectedFruit("SIBNET")}
                >
                  SIBNET
                </button>
              </div>
            </details-menu>
          </details>
        </div>
      </div>
    </section>
  );
}
