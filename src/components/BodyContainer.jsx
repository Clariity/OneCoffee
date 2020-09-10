import React, { useState, useContext } from "react";
import { toast } from 'react-toastify';
import RoomContainer from "./RoomContainer";
import FilterContainer from "./FilterContainer";
import { StoreContext } from "../store/store";
import FilterModal from "./modals/FilterModal";
import NewTableModal from "./modals/NewTableModal";

const BodyContainer = () => {
  const { state } = useContext(StoreContext);
  const [activeRoom, setActiveRoom] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showNewTableModal, setShowNewTableModal] = useState(false);

  function addTable(room, tableInfo) {
    let index = room.split(":")[0];
    let name = room.split(":")[1];
    let newTables = state.roomData[index].tables;
    newTables.push(tableInfo);
    state.firebaseApp.firestore().collection("rooms").doc(name).update({
      tables: newTables,
    });
    setShowNewTableModal(false);
    toast('Room added!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <div className="row pad-1-t">
      <div className="col-lg-3">
        <div className="rooms flex flex-column">
          <h3 className="pad-1 text-align-left flex" style={{ alignItems: "center" }}>
            <span style={{ flexGrow: 1 }}>Rooms</span>
            <i
              className="icon dls-icon-plus-circle icon-hover search-icon"
              onClick={() => setShowNewTableModal(true)}
            />
          </h3>
          {state.roomData.map((room, index) => (
            <button
              className="btn btn-secondary margin-1-b"
              key={index + "-" + Math.random}
              onClick={() => setActiveRoom(index)}
            >
              {room.name}
            </button>
          ))}
        </div>

        <div className="Table filters">
          <h3 className="pad-1 text-align-left flex" style={{ alignItems: "center" }}>
            <span style={{ flexGrow: 1 }}>Table Filters</span>
            <i
              className="icon dls-icon-filter icon-hover search-icon"
              onClick={() => setShowFilterModal(true)}
            />
          </h3>
          <p>No filters applied</p>
          {/*
            map over filtersData - (name, value)
            create a FilterContainer object for each of these
            <FilterContainer />
           */}
        </div>
      </div>

      <div className="col-lg-9">
        <h3>{activeRoom !== null ? state.roomData[activeRoom].name : "Please select a room"}</h3>
        <RoomContainer className="dls-gray-01-bg" roomIndex={activeRoom} />
      </div>
      {showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} />}
      {showNewTableModal && (
        <NewTableModal setShowNewTableModal={setShowNewTableModal} addTable={addTable} />
      )}
    </div>
  );
};

export default BodyContainer;
