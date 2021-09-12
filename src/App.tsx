import React from 'react';
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          CryptoCamba.com
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
