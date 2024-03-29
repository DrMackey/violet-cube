import React from "react";
import "./InfoBlockItem.css";

export default function InfoBlockItem({ isItems }) {
  const { title, content, subtitle } = isItems;

  return (
    <li className="info-block__item li">
      <h2 className="info-block__title">{title}</h2>
      <div className="info-block__content">{content}</div>
      <p className="info-block__subtitle">{subtitle}</p>
    </li>
  );
}
