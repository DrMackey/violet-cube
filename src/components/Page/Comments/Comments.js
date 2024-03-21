import React from "react";
import "./Comments.css";

export default function Comments() {
  return (
    <section className="comments">
      <div className="comments__title-container">
        <h2 className="comments__title">Оценки и отзывы</h2>
        <button className="comments__title-button">Все</button>
      </div>

      <div className="ratings">
        <div className="ratings__averages">
          <p className="ratings__averages-title">4.5</p>
          <p className="ratings__averages-subtitle">из 5</p>
        </div>

        <div className="star-bar">
          <figure className="star-bar__graph">
            <div className="star-bar__row">
              <span className="star-bar__stars stars-5"></span>
              <div className="star-bar__bar">
                <div
                  className="star-bar__bar_foreground-bar"
                  style={{ width: "74%" }}
                ></div>
              </div>
            </div>
            <div className="star-bar__row">
              <span className="star-bar__stars stars-4"></span>
              <div className="star-bar__bar">
                <div
                  className="star-bar__bar_foreground-bar"
                  style={{ width: "12%" }}
                ></div>
              </div>
            </div>
            <div className="star-bar__row">
              <span className="star-bar__stars stars-3"></span>
              <div className="star-bar__bar">
                <div
                  className="star-bar__bar_foreground-bar"
                  style={{ width: "6%" }}
                ></div>
              </div>
            </div>
            <div className="star-bar__row">
              <span className="star-bar__stars stars-2"></span>
              <div className="star-bar__bar">
                <div
                  className="star-bar__bar_foreground-bar"
                  style={{ width: "3%" }}
                ></div>
              </div>
            </div>
            <div className="star-bar__row">
              <span className="star-bar__stars stars-1"></span>
              <div className="star-bar__bar">
                <div
                  className="star-bar__bar_foreground-bar"
                  style={{ width: "6%" }}
                ></div>
              </div>
            </div>
          </figure>
          <p className="star-bar__count">32 429 оценок</p>
        </div>
      </div>

      <div className="comments__list-container">
        <ul className="comments__list">
          <li className="comments__item">
            <div className="comments__header">
              <div className="comments__title-wrapper">
                <h3 className="comments__title-item">Нравится, но</h3>
                <figure className="comments__title-stars">
                  <span className="comments__stars"></span>
                </figure>
              </div>

              <div className="comments__time-container">
                <time className="comments__time">1 год назад</time>
                <span className="comments__nickname">Abby_Penguins</span>
              </div>
            </div>

            <div className="comments__content-container">
              <p className="comments__content">
                I love this game and I love that it works offline. I found this
                game by searching for “zen games” when I was scrolling through
                and saw this game I downloaded it. Being a “zen” game, I would
                expect more time to stack the items. The timer just frustrates
                me and makes me mad when I have almost all of the things stacked
                and it says that I am out of time. When I am at home (or
                somewhere where I have internet), this isn’t a big issue, but
                when I am on the road (or somewhere where there is no internet)
                I can’t watch the ad to continue. Overall this game is very fun
                and I would highly recommend it.
              </p>
              <button className="comments__button">еще</button>
            </div>
          </li>

          <li className="comments__item">
            <div className="comments__header">
              <div className="comments__title-wrapper">
                <h3 className="comments__title">Timed play</h3>
                <figure className="comments__title-stars">
                  <span className="comments__stars"></span>
                </figure>
              </div>

              <div className="comments__time-container">
                <time className="comments__time">1 год назад</time>
                <span className="comments__nickname">CaliRya</span>
              </div>
            </div>

            <div className="comments__content-container">
              <p className="comments__content">
                This is my kind of game. Simple, relaxing, and pleasing. It’s
                super easy to just pick up and play four as long or little as
                time allows. The only thing that’s stopping me from playing it
                beyond “pack 1” is the timer. Why not have an option to play
                without a timer so I can fully relax and take my time? To me,
                the timer makes it stressful to play, because I have to finish
                before the clock runs out. If the timer was gone I would pay for
                the ad-free option and try the other packs/levels.
              </p>
              <button className="comments__button">еще</button>
            </div>
          </li>

          <li className="comments__item">
            <div className="comments__header">
              <div className="comments__title-wrapper">
                <h3 className="comments__title">Very fun!</h3>
                <figure className="comments__title-stars">
                  <span className="comments__stars"></span>
                </figure>
              </div>

              <div className="comments__time-container">
                <time className="comments__time">1 год назад</time>
                <span className="comments__nickname">
                  please help with the nicknames
                </span>
              </div>
            </div>

            <div className="comments__content-container">
              <p className="comments__content">
                I found it very fun and relaxing to play. However, right when I
                joined, an event popped on my screen. In my head I was like “Oh
                great! A cool event.” But when I started reading, a lot of the
                words were spelled very incorrectly. Whoever wrote it, please
                take your time and double check. If it was some type of glitch,
                then I really don’t know what to say. Other than that problem
                the game works out great and I really recommend it!
              </p>
              <button className="comments__button">еще</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
