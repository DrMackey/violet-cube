import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import InfoBlockItem from "./InfoBlockItem/InfoBlockItem.js";
import "./Infoblock.css";

// Супер временно... Лишь бы работало для тестов...
const SearchIcon = () => {
  return (
    <svg
      className="navbar__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
    >
      <path d="M10.21 20.226c2.217 0 4.262-.71 5.934-1.893l6.294 6.233c.292.29.677.434 1.088.434.863 0 1.474-.657 1.474-1.5 0-.394-.133-.775-.425-1.051l-6.253-6.208a10.012 10.012 0 0 0 2.098-6.128C20.42 4.55 15.825 0 10.21 0 4.607 0 0 4.537 0 10.113c0 5.563 4.594 10.113 10.21 10.113Zm0-2.183c-4.382 0-8.006-3.59-8.006-7.93s3.624-7.93 8.006-7.93c4.381 0 8.006 3.59 8.006 7.93s-3.625 7.93-8.006 7.93Z" />
    </svg>
  );
};

const IS_ITEMS = [
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "ВОЗРАСТ", content: "18+" },
  { title: "СТУДИЯ", content: SearchIcon(), subtitle: "Madhouse Inc." },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
  { title: "РЕЙТИНГ", content: "№5", subtitle: "Романтика" },
];

export default function Infoblock() {
  return (
    <section className="info-block">
      <Carousel totalSlides={IS_ITEMS.length} freeScroll={true}>
        <Slider>
          {IS_ITEMS.map((e, i) => {
            return (
              <Slide key={i}>
                <InfoBlockItem isItems={e} />
              </Slide>
            );
          })}
        </Slider>
      </Carousel>
    </section>
  );
}
