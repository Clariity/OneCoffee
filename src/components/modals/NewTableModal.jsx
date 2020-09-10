import React, { useRef, useEffect, useContext, useState } from "react";
import { StoreContext } from "../../store/store";

export default function NewTableModal({ setShowNewTableModal, addTable }) {
  const { state } = useContext(StoreContext);
  const [tableName, setTableName] = useState();
  const [topic, setTopic] = useState();
  const [room, setRoom] = useState();
  const [location, setLocation] = useState();
  const [sizeLimit, setSizeLimit] = useState(4);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowNewTableModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const tableModalRef = useRef();
  useOutsideAlerter(tableModalRef);

  function handleTableNameChange(event) {
    setTableName(event.target.value);
  }
  function handleTopicChange(event) {
    setTopic(event.target.value);
  }
  function handleRadioChange(event) {
    setRoom(event.target.value);
  }
  function handleRadioLocationChange(event) {
    setLocation(event.target.value);
  }
  function incrementSize() {
    if (sizeLimit > 7) return;
    else setSizeLimit(sizeLimit + 1);
  }
  function decrementSize() {
    if (sizeLimit < 3) return;
    else setSizeLimit(sizeLimit - 1);
  }

  function handleCreateTable() {
    addTable(room, {
      name: tableName,
      topic,
      location,
      limit: sizeLimit,
      people: [],
    });
  }

  return (
    <div data-toggle="dismissible">
      <div className="modal-screen" />

      <div className="modal flex flex-align-center">
        <div className="container" role="dialog" ref={tableModalRef}>
          <header className="flex flex-align-center dls-bright-blue-bg dls-white">
            <h2 className="fluid text-align-center heading-3">New Table</h2>
            <button
              className="glyph dls-glyph-close glyph-lg focus-light"
              data-dismiss
              aria-label="Close"
              onClick={() => setShowNewTableModal(false)}
            ></button>
          </header>
          <div className="card">
            <div className="pad-responsive-extra-lr">
              <h2 className="heading-5 margin-3-b text-align-left pad-3-t">Table Name</h2>
              <div data-toggle="inputfield" onChange={handleTableNameChange}>
                <input id="inputDefault" className="form-control" placeholder="Table Name" />
              </div>
              <h2 className="heading-5 margin-3-b text-align-left pad-3-t">Topic</h2>
              <div onChange={handleTopicChange}>
                <input className="form-control" placeholder="Cooking, Football, Music, Gaming" />
              </div>
              <h2 className="heading-5 margin-3-b text-align-left pad-3-t">Room</h2>
              <div style={{ textAlign: "left" }} onChange={handleRadioChange}>
                {state.roomData.map((room, index) => {
                  return (
                    <span key={index} className="radio-selection-item">
                      <input type="radio" value={index + ":" + room.name} /> {room.name}
                    </span>
                  );
                })}
              </div>
              <h2 className="heading-5 margin-3-b text-align-left pad-3-t">Location</h2>
              <div style={{ textAlign: "left" }} onChange={handleRadioLocationChange}>
                <span className="radio-selection-item">
                  <input type="radio" value="London" /> London
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="New York" /> New York
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Brighton" /> Brighton
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Burgess Hill" /> Burgess Hill
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Phoenix" /> Phoenix
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="India" /> India
                </span>
              </div>
              <h2 className="heading-5 margin-3-b text-align-left pad-3-t">Size Limit</h2>
              <div style={{ textAlign: "left" }}>
                <i
                  className={`icon dls-icon-minus-circle icon-hover search-icon ${
                    sizeLimit < 3 && "disabled"
                  }`}
                  onClick={decrementSize}
                />
                <span style={{ padding: "5px" }}>{sizeLimit}</span>
                <i
                  className={`icon dls-icon-plus-circle icon-hover search-icon ${
                    sizeLimit > 7 && "disabled"
                  }`}
                  onClick={incrementSize}
                />
              </div>
            </div>
            <div className="text-align-right-sm-up text-align-center-sm-down pad border-t pad-4-lr">
              <button className="btn" onClick={handleCreateTable}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
