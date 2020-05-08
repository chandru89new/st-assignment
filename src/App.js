import React, { useEffect } from "react";
import "./App.css";

function App() {
  let stAnalytics;

  useEffect(() => {
    stAnalytics = window.stAnalytics;
    if (stAnalytics) {
      stAnalytics
        .getInstance()
        .sendPageViewEvent("home_page_viewed", {});
    }
  }, []);

  const trigButtonEvent = (name) => {
    if (stAnalytics)
      stAnalytics.getInstance().sendButtonEvent("button_clicked", {
        name,
      });
  };

  return (
    <div id="app">
      <div>
        <button onClick={() => trigButtonEvent("button1")}>
          Button 1
        </button>
      </div>
      <div>
        <button onClick={() => trigButtonEvent("button2")}>
          Button 2
        </button>
      </div>
    </div>
  );
}

export default App;
