import React, { useState, useEffect, useRef } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { DragDealer } from "./DragDealer.ts";
import "./Player.css";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export default function Player({ isVideo, isLoadVideo }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isVideoIndex, setIsVideoIndex] = useState({
    scrollLeft: 1,
    clientWidth: 1,
  });

  const { scrollLeft, clientWidth } = isVideoIndex;

  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  // const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragState.current.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  // const [selected, setSelected] = React.useState<string>("");
  const handleItemClick = (itemId) => () => {
    if (dragState.current.dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <section className="player">
      <ul
        className="player__horizontal-media-scroller"
        onClick={(e) => {
          console.log(e.clientX, e.clientY);
        }}
        onWheel={(e) => {
          console.log(e);
        }}
        onScroll={(e) => {
          setIsVideoIndex({
            scrollLeft: e.target.scrollLeft,
            clientWidth: e.target.clientWidth,
          });
          console.log(isVideoIndex.scrollLeft, isVideoIndex.clientWidth);
        }}
      >
        {isLoadVideo &&
          isVideo.map((e, i) => {
            const link = e.url;
            return (
              <li key={e.id} className="player__li">
                <div className="player__li-content">
                  {isVideoIndex === i && (
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
              </li>
            );
          })}
      </ul>
      <div className="player__nav">
        <div className="player__series">
          <p className="player__series-title">
            Серия
            <span className="player__series-title-span">
              {Math.trunc(scrollLeft / (clientWidth - 30) + 1.5)}
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
