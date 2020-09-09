import React, { useContext } from "react";
import Logo from "./Logo";
import Search from "./Search";
import { StoreContext } from "../../store/store";

export default function Navbar() {
  const { state } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="oc-navbar row">
        <div className="col-xs-4">
          <Logo />
        </div>
        <div className="col-xs-8 search">
          <Search />
          {state.user !== null && (
            <img className="navbar-image" src={state.user.photoURL} alt="google photo url" />
          )}
        </div>
      </div>
    </div>
  );
}
