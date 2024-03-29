import React from "react";
import "./CommentItem.css";

export default function CommentItem({ onComment }) {
  const { title, time, nickname, content } = onComment;

  return (
    <li className="comments__item">
      <div className="comments__header">
        <div className="comments__title-wrapper">
          <h3 className="comments__title-item">{title}</h3>
          <figure className="comments__title-stars">
            <span className="comments__stars"></span>
          </figure>
        </div>

        <div className="comments__time-container">
          <time className="comments__time">{time}</time>
          <span className="comments__nickname">{nickname}</span>
        </div>
      </div>

      <div className="comments__content-container">
        <p className="comments__content">{content}</p>
        <button className="comments__button">еще</button>
      </div>
    </li>
  );
}
