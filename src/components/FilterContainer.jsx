import React from 'react';


function handleRemoveFilterClick() {
    console.log("Remove this filter");
  }

const FilterContainer = ({ filter }) => (
    <h5>
      <i className="icon dls-icon-close icon-hover" onClick={handleRemoveFilterClick} />
      Filter Name: Filter Value
    </h5>
);

export default FilterContainer;