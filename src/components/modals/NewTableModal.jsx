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
          <header className="flex flex-align-center dls-dark-yellow-bg dls-white">
            <h2 className="fluid text-align-center font-light">New Table</h2>
            <button
              className="glyph dls-glyph-close glyph-lg focus-light"
              style={{ color: "#00165a" }}
              data-dismiss
              aria-label="Close"
              onClick={() => setShowNewTableModal(false)}
            ></button>
          </header>
          <div className="card">
            <div className="pad-responsive-extra-lr">
              <h3 className="margin-3-b text-align-left pad-3-t">Table Name</h3>
              <div data-toggle="inputfield" onChange={handleTableNameChange}>
                <input id="inputDefault" className="form-control" placeholder="Table Name" />
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Topic</h3>
              <div onChange={handleTopicChange}>
                <input className="form-control" placeholder="Cooking, Football, Music, Gaming" />
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Room</h3>
              <div style={{ textAlign: "left" }} onChange={handleRadioChange}>
                {state.roomData.map((room, index) => {
                  return (
                    <span key={index} className="radio-selection-item">
                      <input type="radio" value={index + ":" + room.name} name="test" /> {room.name}
                    </span>
                  );
                })}
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Location</h3>
              <div style={{ textAlign: "left" }} onChange={handleRadioLocationChange}>
                <span className="radio-selection-item">
                  <input type="radio" value="London" name="test" /> London
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="New York" name="test" /> New York
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Brighton" name="test" /> Brighton
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Burgess Hill" name="test" /> Burgess Hill
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="Phoenix" name="test" /> Phoenix
                </span>
                <span className="radio-selection-item">
                  <input type="radio" value="India" name="test" /> India
                </span>
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Size Limit</h3>
              <div style={{ textAlign: "left" }}>
                <i
                  className={`icon dls-icon-minus-circle icon-hover search-icon ${
                    sizeLimit < 3 && "disabled"
                  }`}
                  onClick={decrementSize}
                />
                <span style={{ padding: "5px", paddingLeft: "10px" }}>{sizeLimit}</span>
                <i
                  className={`icon dls-icon-plus-circle icon-hover search-icon ${
                    sizeLimit > 7 && "disabled"
                  }`}
                  onClick={incrementSize}
                />
              </div>
              <br />
            </div>
            <div className="text-align-right-sm-up text-align-center-sm-down pad border-t pad-4-lr">
              <button
                style={{ color: "#00165a" }}
                className="btn dls-dark-yellow-bg"
                onClick={handleCreateTable}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
