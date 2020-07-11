import React from "react";
import { useToasts } from "react-toast-notifications";
import { addToCart } from "../../../Store";
import { connect } from "react-redux";

function AddToCart(props) {
  const { addToast } = useToasts();
  const addToCartButtonClick = () => {
    props.addToCart(props.item);
    addToast("Added to cart", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return (
    <React.Fragment>
      <button
        className="waves-effect waves-light btn-small"
        onClick={addToCartButtonClick}
      >
        Add To Cart
      </button>
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddToCart);
