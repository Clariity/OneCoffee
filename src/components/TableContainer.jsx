import React, { useRef, useEffect } from 'react';
import createWebexMeeting from '../api/createMeetingUtil';

const TableContainer = ({ table }) => {
  const pushToWebex = () => createWebexMeeting();
  const buttonDisabled = useRef(null);
  useEffect(() => {
    table.limit <= table.people.length
      ? buttonDisabled.current.setAttribute("disabled", true)
      : buttonDisabled.current.removeAttribute("disabled");
  },[table.people.length, table.limit, buttonDisabled]);

  return (
    <div className="pad-1 col-sm-6">
      <div className="tableContainer pad-1 flex flex-column flex-justify-between flex-align-content-start" >
        <div className="flex flex-justify-between pad-1-b">
            <h3>
              {table.name}
            </h3>
            <div className="membersContainer">
              <h4>{`${table.people.length}/${table.limit}`}</h4>
            </div>
        </div>
        <div className="flex flex-justify-between flex-align-content-end pad-1-t">
          <h2>{table.topic}</h2>
          <button 
            ref={buttonDisabled}
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={pushToWebex}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;