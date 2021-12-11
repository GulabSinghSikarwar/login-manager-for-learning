import React from "react";

import Header from './components/HEADER/header'
import './App.css'
import Home from "./components/HOME/home";

function App() {
  return (
      <React.Fragment>
          <header className={"App-header"} >
              <Header/>

          </header>
          <div className={"body"}>
              <Home/>

          </div>


      </React.Fragment>

  );
}

export default App;
