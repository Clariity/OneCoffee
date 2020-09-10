import React, { useRef, useEffect, useContext } from "react";
import { StoreContext } from "../store/store";

const TableContainer = ({ roomIndex, tableNumber }) => {
  const { state } = useContext(StoreContext);
  const buttonDisabled = useRef(null);

  let room = state.roomData[roomIndex];
  let table = state.roomData[roomIndex].tables[tableNumber];

  useEffect(() => {
    table.limit <= table.people.length
      ? buttonDisabled.current.setAttribute("disabled", true)
      : buttonDisabled.current.removeAttribute("disabled");
  }, [table.people.length, table.limit, buttonDisabled]);

  function handleJoin() {
    let newTables = room.tables;
    newTables[tableNumber].people.push({
      name: state.user.displayName,
      photoURL: state.user.photoURL,
    });
    state.firebaseApp.firestore().collection("rooms").doc(room.name).update({
      tables: newTables,
    });
  }

  return (
    <div className="pad-1 col-sm-6">
      <div className="tableContainer pad-1 flex flex-column flex-justify-between flex-align-content-start">
        <div className="flex flex-justify-between pad-1-b">
          <h3>{table.name}</h3>
          <div className="membersContainer">
            <h4 className="pad-1-r">{`${table.people.length}/${table.limit}`}</h4>
          </div>
        </div>
        <div className="flex flex-align-content-end">
          {table.people.map((person, index) => {
            return (
              <img
                key={index + "-" + Math.random}
                className="navbar-image-sm margin-1-r"
                src={person.photoURL}
                alt="google personal"
              />
            );
          })}
        </div>
        <div
          className="flex flex-justify-between flex-align-content-end pad-1-t"
          style={{ alignItems: "center" }}
        >
          <h2>{table.topic}</h2>
          <button
            ref={buttonDisabled}
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleJoin}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
