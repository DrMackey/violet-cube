import React from "react";
import ReactDOM from "react-dom/client";
import MediaQuery from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <MediaQuery minWidth={426}>
      <div className="desktop-info">
        <h1 className="desktop-info__title">
          Настольная версия сайта в разработке{" "}
          {/* {`scrollTopСontent: ${scrollTopСontent}, scrollTopMain: ${scrollTopMain}`} */}
        </h1>
      </div>
      <div className="desktop-container">
        <main className="main">
          <App />
        </main>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={425}>
      <main className="main">
        <App />
      </main>
    </MediaQuery>
  </BrowserRouter>
  //</React.StrictMode>
);
