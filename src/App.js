import React from "react";
import Search from "./components/Search";
import BodyContainer from "./components/BodyContainer";

import "./styles/global.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="oc-navbar row">
          <div className="col-xs-4">
            <img className="oc-navbar-logo" src="./logo192.png" alt="logo" />
            One Coffee
          </div>
          <div className="col-xs-8">
            <Search />
          </div>
        </div>
        <BodyContainer />
      </div>
    </div>
      
  );
}
