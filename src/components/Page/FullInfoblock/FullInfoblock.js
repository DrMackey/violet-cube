import React from "react";
import "./FullInfoblock.css";

export default function FullInfoblock() {
  return (
    <section className="full-info-block">
      <div className="full-info-block__title-container">
        <h2 className="full-info-block__title">Информация</h2>
      </div>
      <ul className="full-info-block__list">
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Тип</h3>
          <p className="full-info-block__item-subtitle">TV Сериал</p>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Эпизоды</h3>
          <p className="full-info-block__item-subtitle">11</p>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Длительность эпизода</h3>
          <p className="full-info-block__item-subtitle">30 мин</p>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Статус</h3>
          <p className="full-info-block__item-subtitle">вышло</p>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Жанры</h3>
          <button className="full-info-block__button">драма и еще 8</button>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">
            Альтернативные названия
          </h3>
          <button className="full-info-block__button">
            Oshi No Ko и еще 4
          </button>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Возраст</h3>
          <p className="full-info-block__item-subtitle">18+</p>
        </li>
        <li className="full-info-block__item">
          <h3 className="full-info-block__item-title">Авторские права</h3>
          <p className="full-info-block__item-subtitle">CRUNCHYROLL, OOO</p>
        </li>
      </ul>
    </section>
  );
}
