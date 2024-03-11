import React from "react";
import { Link } from "react-router-dom";
import "./CardsGroup.css";

export default function CardsGroup({ onIsCards, isLoadCards, handleClick }) {
  return (
    <section className="cards-group">
      <div className="cards-group__title-container">
        <h2 className="cards-group__title">Смотрят сегодня</h2>
        <button className="cards-group__button">Все</button>
      </div>
      <ul className="cards-group__list">
        {isLoadCards
          ? onIsCards.map((card) => {
              const link = card.url.slice(8);

              return (
                <li className="cards-group__item" key={card.id}>
                  <Link
                    className="card"
                    key={card.id}
                    onClick={handleClick}
                    to={`${link}`}
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
                </li>
              );
            })
          : ""}
      </ul>
    </section>
  );
}
