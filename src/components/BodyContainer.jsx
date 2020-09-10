import React, { useState, useContext } from "react";
import RoomContainer from "./RoomContainer";
import FilterContainer from "./FilterContainer";
import { StoreContext } from "../store/store";

const BodyContainer = () => {
  const { state } = useContext(StoreContext);
  const [activeRoom, setActiveRoom] = useState();

  return (
    <div className="row">
      <div className="col-lg-3 dls-gray-04-bg">
        <div className="rooms flex flex-column">
          <h3>
            Rooms
            <button class="btn-tertiary btn-icon btn-sm dls-icon-plus-circle margin-1-r">
          </button>
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
            <button class="btn-tertiary btn-icon btn-sm dls-icon-filter margin-1-r">
          </button>
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
    </div>
  );
};

export default BodyContainer;
