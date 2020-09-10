import React, { useState, useContext } from "react";
import RoomContainer from "./RoomContainer";
import FilterContainer from "./FilterContainer";
import { StoreContext } from "../store/store";
import FilterModal from "./modals/FilterModal";
import NewTableModal from "./modals/NewTableModal";

const BodyContainer = () => {
  const { state } = useContext(StoreContext);
  const [activeRoom, setActiveRoom] = useState();
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
  }

  return (
    <div className="row">
      <div className="col-lg-3 dls-gray-04-bg">
        <div className="rooms flex flex-column">
          <h3>
            Rooms
            <i
              className="icon dls-icon-plus-circle icon-hover search-icon"
              onClick={() => setShowNewTableModal(true)}
            />
          </h3>
          {state.roomData.map((room, index) => (
            <button
              className="btn btn-secondary"
              key={index + "-" + Math.random}
              onClick={() => setActiveRoom(room.name)}
            >
              {room.name}
            </button>
          ))}
        </div>

        <div className="Table filters">
          <h3>
            Table Filters
            <i
              className="icon dls-icon-filter icon-hover search-icon"
              onClick={() => setShowFilterModal(true)}
            />
          </h3>

          {/*
            map over filtersData - (name, value)
            create a FilterContainer object for each of these
            <FilterContainer />
           */}
        </div>
      </div>

      <div className="col-lg-9">
        {activeRoom && state.roomData.find((room) => room.name === activeRoom).name}
        <div className="dls-gray-01-bg">
          <RoomContainer
            className="dls-gray-01-bg"
            room={state.roomData.find((room) => room.name === activeRoom)}
          />
        </div>
      </div>
      {showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} />}
      {showNewTableModal && (
        <NewTableModal setShowNewTableModal={setShowNewTableModal} addTable={addTable} />
      )}
    </div>
  );
};

export default BodyContainer;
