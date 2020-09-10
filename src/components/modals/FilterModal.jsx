import React, { useRef, useEffect } from "react";

export default function FilterModal({ setShowFilterModal }) {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowFilterModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const searchRef = useRef();
  useOutsideAlerter(searchRef);

  return (
    <div data-toggle="dismissible">
      <div className="modal-screen" />
      <div className="modal flex flex-align-center">
        <div className="container" role="dialog" ref={searchRef}>
          <header className="flex flex-align-center dls-color-attention-bg dls-white">
            <h2 className="fluid text-align-center font-light">Table Filters</h2>
            <button
              className="glyph dls-glyph-close glyph-lg focus-light"
              data-dismiss
              aria-label="Close"
              onClick={() => setShowFilterModal(false)}
            ></button>
          </header>
          <div className="card">
            <div className="pad-responsive-extra-lr">
              <h3 className="margin-3-b text-align-left pad-3-t">Topic</h3>
              <div data-toggle="inputfield">
                <input id="inputDefault" class="form-control" placeholder="Placeholder text" />
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Interest</h3>
              <div data-toggle="inputfield">
                <input id="inputDefault" class="form-control" placeholder="Placeholder text" />
              </div>
              <h3 className="margin-3-b text-align-left pad-3-t">Location</h3>
              <h3 className="margin-3-b text-align-left pad-3-t">Size</h3>
              <h3 className="margin-3-b text-align-left pad-3-t">Shared Interests</h3>
            </div>
            <div className="text-align-right-sm-up text-align-center-sm-down pad border-t pad-4-lr">
              <button className="btn dls-color-attention-bg dls-deep-blue">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
