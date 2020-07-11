import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMobileStore, searchMobile } from "../../Store/index";
import Item6 from "../../images/mobile.jpeg";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import AddToCart from "../Common/Add-to-cart/AddToCart";
import Sorting from "./Sorting";
import Searching from "./Searching";
function MobileList(props) {
  const [searchItem, setSearchItem] = useState("");
  const [sortByPrice, updateSort] = useState("");
  const [paginationState, changePerPage] = useState({
    offset: 0,
    data: [],
    perPage: 3,
    currentPage: 0,
  });

  useEffect(() => {
    props.fetchMobileStore();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageClick = (e) => {
    const offset = e.selected * paginationState.perPage;
    changePerPage({
      ...paginationState,
      currentPage: e.selected,
      offset: offset,
    });
  };
  const resetClick = (event) => {
    event.preventDefault();
    setSearchItem("");
    props.fetchMobileStore();
  };
  const sortTheMobileData = (sortOrder) => {
    updateSort(sortOrder);

    if (sortOrder === "LowToHigh") {
      sortByPriceAsc();
    } else if (sortOrder === "HighToLow") {
      sortByPriceDesc();
    } else {
      props.fetchMobileStore();
    }
  };
  const sortByPriceAsc = () => {
    props.mobileData.sort((a, b) => a.price - b.price);
  };

  const sortByPriceDesc = () => {
    props.mobileData.sort((a, b) => b.price - a.price);
  };
  const searchClick = (event, searchBy) => {
    event.preventDefault();
    if (searchItem !== "") {
      props.searchMobile(searchBy, searchItem);
      changePerPage({
        ...paginationState,
        offset:0
      });
    }
  };
  let itemList = props.mobileData.length ? (
    props.mobileData
      .slice(
        paginationState.offset,
        paginationState.offset + paginationState.perPage
      )
      .map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={Item6} alt={item.name} />
              <span className="card-title">{item.name}</span>
            </div>

            <div className="card-content">
              <p>
                <b>RAM : {item.ram}</b>
              </p>
              <p>
                <b>Price : {item.price}$</b>
              </p>
              <p>
                <b>Color: {item.color}</b>
              </p>
              <p>
                <b>Screen Size: {item.screenSize}</b>
              </p>
              <p>
                <b>Screen Size: {item.brand}</b>
              </p>
              <br></br>
              <div>
                <Link to={{ pathname: "/detail", mobileInfo: item }}>
                  <button className="waves-effect waves-light btn-small">
                    Details
                  </button>
                </Link>
                <div className="right">
                  <AddToCart item={item} />
                </div>
              </div>
            </div>
          </div>
        );
      })
  ) : (
    <p>No Data Found</p>
  );

  return (
    <div className="container">
      <div>
        <h3 style={{ marginTop: "72px" }}>Mobiles</h3>
      </div>
      <form>
        {/* <Searching
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          searchClick={searchClick}
          resetClick={resetClick}
        /> */}
        <Sorting
          sortTheMobileData={sortTheMobileData}
          sortByPrice={sortByPrice}
        />
      </form>
      <div className="box">{itemList}</div>
      <div className="center" style={{ paddingLeft: "354px" }}>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(
            props.mobileData.length / paginationState.perPage
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={(e) => handlePageClick(e)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mobileData: state.mobileList.mobiles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMobileStore: () => dispatch(fetchMobileStore()),
    searchMobile: (searchBy, searchItem) => {
      dispatch(searchMobile(searchBy, searchItem));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileList);
