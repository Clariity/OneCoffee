import React, { useState } from "react";

export default function Search() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <i className="icon dls-icon-search icon-hover" onClick={() => setShowSearch(true)} />
      <input type="text" className={showSearch ? "" : ""} />
      {showSearch && (
        <i
          className="icon dls-icon-cancel-circle icon-hover"
          onClick={() => setShowSearch(false)}
        />
      )}
    </>
  );
}
