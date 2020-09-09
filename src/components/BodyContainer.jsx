import React, { useState, useContext } from "react";
import RoomContainer from "./RoomContainer";
import { StoreContext } from "../store/store";

const BodyContainer = () => {
  const { state } = useContext(StoreContext);
  const [activeRoom, setActiveRoom] = useState();

  return (
    <div className="row">
      <div className="col-lg-3 dls-gray-04-bg">
        <div className="rooms flex flex-column">
          Rooms
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
        <div className="Table filters">Table filters</div>
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
    </div>
  );
};

export default BodyContainer;
