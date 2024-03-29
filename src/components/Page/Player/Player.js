import React, { useState, useEffect } from "react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import "./Player.css";

export default function Player({ isVideo, isLoadVideo }) {
  const [isCurrentSlide, setIsCurrentSlide] = useState(0);
  let onCurrentSlide = 0;
  const localCurrentSlide = { index: Number };

  return (
    <section className="player">
      {isLoadVideo && (
        <Carousel
          totalSlides={isVideo.length}
          visibleSlides={1}
          trayPadding={"15px"}
          slideMargin={5}
          onSlide={({ currentSlide }) => {
            localCurrentSlide.index = currentSlide;
          }}
        >
          <Slider>
            {isVideo.map((e, i) => {
              const link = e.url;
              return (
                <Slide key={e.id}>
                  <div className="player__li">
                    <div className="player__li-content">
                      {isCurrentSlide === i && (
                        <iframe
                          title={e.id}
                          className="player__video player__video_iframe"
                          src={link}
                          frameborder="0"
                          // scrolling="no"
                          allowfullscreen
                        ></iframe>
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
          <p className="player__series-title">
            Серия
            <span className="player__series-title-span">
              {localCurrentSlide.index}
              {/* {Math.trunc(scrollLeft / (clientWidth - 30) + 1.5)} */}
            </span>
            /<span>{isVideo.length}</span>
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
        <div className="player__choice">
          <select className="player__select">
            <option value="KODIK" selected="">
              KODIK
            </option>
            <option value="Sibnet">Sibnet</option>
          </select>
          <p className="player__choice_subtitle">Встроенная реклама</p>
        </div>
      </div>
    </section>
  );
}
