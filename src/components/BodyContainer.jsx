import React from 'react';
import RoomContainer from './RoomContainer';
import rooms from "../data/Rooms.json";

const BodyContainer = () => (
    rooms.map(room => (
      <div className="dls-gray-01-bg">
        Body Container
        <RoomContainer className="dls-gray-01-bg" room={room} />
      </div>
    )
  )
);

export default BodyContainer;