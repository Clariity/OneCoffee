import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import RoomContainer from "./RoomContainer";
import { StoreContext } from "../store/store";
import FilterModal from "./modals/FilterModal";
import NewTableModal from "./modals/NewTableModal";
import "react-toastify/dist/ReactToastify.css";

const BodyContainer = () => {
  const { state } = useContext(StoreContext);
  const [activeRoom, setActiveRoom] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showNewTableModal, setShowNewTableModal] = useState(false);

  function addTable(room, tableInfo) {
    fetch("https://webexapis.com/v1/meetings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer NTVhYzc2MDYtOTdhOS00ZmQ4LWIwZmUtN2EyMjk1NTkzY2E2MWZhYzhhNGMtYmMx_P0A1_82a20bd7-efa6-4b1f-8523-922d77a2abd0",
      },
      body: JSON.stringify({
        title: "Josh room",
        password: "BcJep@43",
        start: "2020-09-10 17:00:00",
        end: "2020-09-10 18:00:00",
        enabledAutoRecordMeeting: false,
        allowAnyUserToBeCoHost: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        let index = room.split(":")[0];
        let name = room.split(":")[1];
        let newTables = state.roomData[index].tables;
        newTables.push({
          ...tableInfo,
          link: data.webLink,
        });
        state.firebaseApp.firestore().collection("rooms").doc(name).update({
          tables: newTables,
        });
        setShowNewTableModal(false);
        toast("Room added!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      <ToastContainer />
    </div>
  );
};

export default BodyContainer;
