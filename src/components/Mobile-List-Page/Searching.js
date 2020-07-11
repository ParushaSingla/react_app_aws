import React, { useState } from "react";

function Searching(props) {
  const [searchBy, updateSearchBy] = useState("name");
  const inputField = {
    width: "30%",
    margin: "27px 0 14px 0",
    height: "36px",
  };
  const label = {
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#333",
    marginLeft: "127px",
  };

  return (
    <React.Fragment>
      <div className="form-group col-md-4">
        <label>
          <b>Search By</b>
        </label>
        <select
          className="form-control"
          onChange={(e) => {
            updateSearchBy(e.target.value);
          }}
        >
          <option value="name">Search By Name</option>
          <option value="price">Search By Price</option>
          <option value="brand">Search By Brand</option>
        </select>
      </div>
      <div className="form-group col-md-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={
              searchBy === "name"
                ? "Search By Name"
                : searchBy === "price"
                ? "Search By Price"
                : "Search By Brand"
            }
            name="search"
            style={inputField}
            value={props.searchItem}
            onChange={(event) => props.setSearchItem(event.target.value)}
          />
        </div>
        <div
          className="input-group-btn"
          style={{ left: "256px", bottom: "51px" }}
        >
          <button
            className="btn btn-default"
            type="submit"
            onClick={(event) => props.searchClick(event, searchBy)}
          >
            <i className="glyphicon glyphicon-search"></i>
          </button>
          <button className="btn btn-default" onClick={props.resetClick}>
            <i className="large material-icons" style={{ fontSize: "2rem" }}>
              clear
            </i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Searching;
