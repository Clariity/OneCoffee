import React, { useContext } from "react";
import TableContainer from "./TableContainer";
import { StoreContext } from "../store/store";

const RoomContainer = ({ roomIndex }) => {
  const { state } = useContext(StoreContext);

  console.log(roomIndex, state.roomData[roomIndex]);
  return (
    <>
      <div className="RoomHeader dls-deep-blue-bg" />
      <div className="row pad-1">
        {state.roomData[roomIndex] &&
          state.roomData[roomIndex].tables &&
          state.roomData[roomIndex].tables.map((table, index) => (
            <TableContainer
              className="dls-bright-blue-bg"
              key={index + "-" + Math.random}
              roomIndex={roomIndex}
              tableNumber={index}
            />
          ))}
      </div>
    </>
  );
};

export default RoomContainer;
