import React, { useState } from 'react';
import RoomContainer from './RoomContainer';
import rooms from "../data/Rooms.json";

const BodyContainer = () => {
  const [activeRoom, setActiveRoom] = useState(rooms[0].name);

  return (
    <div className="row">
      <div className="col-lg-3 dls-gray-04-bg">
        <div className="rooms flex flex-column" >
          Rooms
          {
            rooms.map(room => (
              <button className="btn btn-secondary" onClick={() => setActiveRoom(room.name)}>
                {room.name}
              </button>
            ))
          }
        </div>
        <div className="Table filters">
          Table filters
        </div>
      </div>
      <div className="col-lg-9">
        {
          rooms.find(room => room.name === activeRoom).name
        }
          <div className="dls-gray-01-bg">
            <RoomContainer 
              className="dls-gray-01-bg" 
              room={rooms.find(room => room.name === activeRoom)}
            />
          </div>
      </div>
    </div>
    )
};

export default BodyContainer;