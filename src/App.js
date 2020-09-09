import React, { useContext, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routing/Routes";
import { StoreContext, ActionType } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global.scss";

function App() {
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    var unregisterAuthObserver = state.firebaseApp.auth().onAuthStateChanged((user) => {
      dispatch({ type: ActionType.SET_AUTH_LOADED, payload: true });
      dispatch({ type: ActionType.SET_USER, payload: user });
      console.log("User: ", user);
    });
    return unregisterAuthObserver;
  }, [dispatch, state.firebaseApp]);

  useEffect(() => {
    if (state.user !== null) {
      var unregisterChangeObserver = state.firebaseApp
        .firestore()
        .collection("rooms")
        .doc("all-rooms")
        .onSnapshot(function (doc) {
          console.log("Current data: ", doc.data());
          dispatch({ type: ActionType.SET_ROOM_DATA, payload: doc.data() });
        });
      return unregisterChangeObserver;
    }
  }, [dispatch, state.firebaseApp, state.user]);

  return (
    state.authLoaded && (
      <div className="App">
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>
    )
  );
}

export default App;
