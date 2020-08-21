import React from "react";

const SearchBox = (props) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lighttest-blue"
        type="Search"
        placeholder="search robots"
        onChange={props.OnSearchChange}
      />
    </div>
  );
};

export default SearchBox;
