import React, { useState } from 'react';
import TableContainer from './TableContainer';

const RoomContainer = ({ room }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  return (
    <>
      <div className="RoomHeader dls-deep-blue-bg"/>
      {room.name}
      {
        drawerToggle && (
          room.name.map(table => (
            <>
              {table.name}
              <TableContainer className="dls-bright-blue-bg" table={table} />
            </>
          ))
        )
      }
    </>
  )
};

export default RoomContainer;