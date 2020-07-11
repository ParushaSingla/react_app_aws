import React from "react";
import mobileImage from "../../images/mobile.jpeg";
import AddToCart from "../Common/Add-to-cart/AddToCart";
const MobileDetail = (props) => {
  let item = props.location.mobileInfo;
  let itemDesc = {
    margin: "-77px auto 0",
  };
  let addedItems = item ? (
    <li className="collection-item avatar" key={item.id}>
      <div className="item-img">
        <img src={mobileImage} alt={item.img} />
      </div>

      <div className="item-desc" style={itemDesc}>
        <span className="title">
          <h2>{item.name}</h2>
        </span>
        <p>
          <b>Price: {item.price}$</b>
        </p>
        <p>
          <b>Color: {item.color}</b>
        </p>
        <p>
          <b>Screen Size: {item.screenSize}</b>
        </p>
        <p>
          <b>Operating System: {item.operatingSystem}</b>
        </p>
        <p>
          <b>RAM: {item.ram}</b>
        </p>
        <p>
          <b>Storage: {item.storage}</b>
        </p>
        <br />
        <AddToCart item={item} />
      </div>
    </li>
  ) : (
    props.history.push("")
  );
  return (
    <div>
      <div className="container">
        <div className="cart">
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default MobileDetail;
