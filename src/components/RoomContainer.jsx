import React from 'react';
import TableContainer from './TableContainer';

const RoomContainer = ({ room }) => {
  return (
    <>
      <div className="RoomHeader dls-deep-blue-bg"/>
      <div classname="row">
      {
        room.tables && room.tables.map(table => (
          <TableContainer className="dls-bright-blue-bg" table={table} />
        )
        )
      }
      </div>
    </>
  )
};

export default RoomContainer;