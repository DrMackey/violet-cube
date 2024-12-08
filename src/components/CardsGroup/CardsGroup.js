import React from "react";
import { Carousel, Slide, Slider } from "react-scroll-snap-anime-slider";
import { Link, useLocation } from "react-router-dom";
import "./CardsGroup.css";

export default function CardsGroup({
  onIsCards,
  handleClick,
  isLoadDelimiter,
  onIsTitle,
}) {
  const location = useLocation();

  return (
    <>
      {onIsCards.status && (
        <>
          <section className="cards-group">
            <div className="cards-group__title-container">
              <h2 className="cards-group__title">
                {onIsTitle ? onIsTitle : "Смотрят сегодня"}
              </h2>
              <button className="cards-group__button">Все</button>
            </div>

            <Carousel
              totalSlides={onIsCards.content.length}
              visibleSlides={1}
              trayPadding={"15px"}
              slideMargin={5}
            >
              <Slider>
                {onIsCards.content.map((card) => {
                  const link = card.url.slice(8);
                  return (
                    <Slide key={card.id}>
                      <div className="cards-group__item">
                        <Link
                          className="card"
                          key={card.id}
                          onClick={handleClick}
                          to={`${location.pathname}/${link}`}
                        >
                          <div className="card__image-container">
                            <img
                              className="card__image"
                              src={`https://shikimori.one${card.image.x96}`}
                              alt="Изображение постера."
                            />
                          </div>
                          <div className="card__title-container">
                            <h2 className="card__title">{card.russian}</h2>
                            <p className="card__genre">{card.name}</p>
                          </div>
                        </Link>
                      </div>
                    </Slide>
                  );
                })}
              </Slider>
            </Carousel>
          </section>
          {isLoadDelimiter && <div className="cards-group__delimiter"></div>}
        </>
      )}
    </>
  );
}
