import React, { useEffect } from "react";
import "./App.css";

function App() {
  let stAnalytics;

  useEffect(() => {
    const init = async function () {
      stAnalytics = await window.stInit();
      stAnalytics
        .getInstance()
        .sendPageViewEvent("home_page_viewed", {});
    };
    init();
  }, []);

  const trigButtonEvent = () => {
    if (stAnalytics)
      stAnalytics.getInstance().sendButtonEvent("button_clicked", {
        name: "button1",
      });
  };
  const trigPageEvent = () => {
    if (stAnalytics)
      stAnalytics.getInstance().sendButtonEvent("button_clicked", {
        name: "button2",
      });
  };

  return (
    <div id="app">
      <div>
        <button onClick={() => trigButtonEvent()}>Button 1</button>
      </div>
      <div>
        <button onClick={() => trigPageEvent()}>Button 2</button>
      </div>
    </div>
  );
}

export default App;
