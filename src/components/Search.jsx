import React, { useState, useEffect, useRef } from "react";

export default function Search() {
  const [showSearch, setShowSearch] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSearch(false);
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

  function handleSearchClick() {
    !showSearch ? setShowSearch(true) : performSearch();
  }

  function performSearch() {
    alert("searching");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") performSearch();
  }

  return (
    <div className="search" ref={searchRef}>
      <input
        type="text"
        id="search-input"
        className={showSearch ? "animate" : ""}
        placeholder="Find Someone"
        onKeyDown={handleKeyDown}
      />
      <i className="icon dls-icon-search icon-hover search-icon" onClick={handleSearchClick} />
    </div>
  );
}
