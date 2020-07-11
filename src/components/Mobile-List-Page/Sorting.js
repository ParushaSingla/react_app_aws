import React from "react";

function Sorting(props) {
  const dropDown = {
    float: "right",
    marginTop: "-5px",
  };
  const label = {
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#333",
    marginLeft: "127px",
  };
  return (
    <div className="form-group col-md-4" style={dropDown}>
      <label>
        <b style={label}>Sort By Price</b>
      </label>
      <select
        className="form-control"
        value={props.sortByPrice}
        style={{ marginLeft: "127px" }}
        onChange={(e) => {    
            props.sortTheMobileData(e.target.value);
        }}
      >
        <option value="NoSorting">Default List</option>
        <option value="HighToLow">Price: High to Low</option>
        <option value="LowToHigh">Price: Low to High</option>
      </select>
    </div>
  );
}

export default Sorting;
