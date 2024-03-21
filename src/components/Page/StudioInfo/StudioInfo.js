import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudioInfo.css";

export default function StudioInfo() {
  return (
    <section className="studio-info">
        <Link className="studio-info__link">
            <div className="studio-info__container">
            <h2 className="studio-info__title">Madhouse Inc.</h2>
            <p className="studio-info__subtitle">Студия</p>
            </div>
            <div className="studio-info__indicator">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                fill="none"
            >
                <rect
                width="10.722"
                height="1.651"
                x="1.43"
                fill="#8D8D92"
                rx=".826"
                transform="rotate(44.538 1.43 0)"
                />
                <rect
                width="10.791"
                height="1.635"
                x=".279"
                y="14.071"
                fill="#8D8D92"
                rx=".817"
                transform="rotate(-45 .28 14.071)"
                />
            </svg>
            </div>
        </Link>
    </section>
  );
}
