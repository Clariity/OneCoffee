import React from "react";
import TableContainer from "./TableContainer";

const RoomContainer = ({ room }) => {
  return (
    <>
      <div className="RoomHeader dls-deep-blue-bg" />
      <div className="row">
        {room &&
          room.tables &&
          room.tables.map((table, index) => (
            <TableContainer
              className="dls-bright-blue-bg"
              key={index + "-" + Math.random}
              table={table}
            />
          ))}
      </div>
    </>
  );
};

export default RoomContainer;
