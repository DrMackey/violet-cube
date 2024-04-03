import React from "react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import { Link } from "react-router-dom";
import "./PreviewCards.css";
import image from "../../../images/Rectangle 86.png";

const isCards = [0, 0, 0];

export default function PreviewCards() {
  return (
    <section className="preview-cards">
      <Carousel
        totalSlides={isCards.length}
        visibleSlides={1}
        trayPadding={"15px"}
        slideMargin={5}
      >
        <Slider>
          {isCards.map((e, i) => {
            return (
              <Slide key={i}>
                <Link className="preview-card">
                  <p className="preview-card__subtitle">ПРЕДЗАКАЗ</p>
                  <h2 className="preview-card__title">
                    DEATH STRANDING DIRECTOR`S CUT
                  </h2>
                  <div className="preview-card__image-block">
                    <div className="caption-image-block">
                      <div className="caption-image-block__container">
                        <div className="caption-image-block__image-container">
                          <img
                            className="caption-image-block__image"
                            src={image}
                            alt="Постер."
                            loading="lazy"
                          ></img>
                        </div>
                        <div className="caption-image-block__title-container">
                          <h3 className="caption-image-block__title">
                            DEATH STRANDING DIRECTOR`S CUT
                          </h3>
                          <p className="caption-image-block__subtitle">
                            Уже скоро
                          </p>
                        </div>
                      </div>
                      <div className="caption-image-block__button-container">
                        <button className="caption-image-block__button">
                          1 790,00 Р
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </Slide>
            );
          })}
        </Slider>
      </Carousel>
    </section>
  );
}
