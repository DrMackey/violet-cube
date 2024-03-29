import React from "react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import "./Categories.css";

const CAT_LIST = ["Драма", "Романтика", "Школа", "Повседневность", "Трагедия"];

export default function Categories() {
  return (
    <section className="categories">
      <Carousel
        totalSlides={CAT_LIST.length}
        visibleSlides={1}
        trayPadding={"20px"}
        freeScroll={true}
      >
        <Slider>
          {CAT_LIST.map((el, id) => {
            return (
              <Slide key={id}>
                <div className="categories__item">
                  <button className="categories__button">
                    <div className="categories__button-icon"></div>
                    <p className="categories__button-title">{el}</p>
                  </button>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </Carousel>
    </section>
  );
}
