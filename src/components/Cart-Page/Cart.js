import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Item6 from "../../images/mobile.jpeg";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  addShipping,
} from "../../Store/actions/cartActions";
import PopUp from "./PopUp";
import { UserConsumer } from "../../contextAPI/userContext";
class cart extends Component {
  constructor(props) {
    super();
    this.state = {
      showPopup: false,
    };
  }

  checkOut(value) {
    value ? this.togglePopup() : this.props.history.push("/loginPage");
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
    this.props.addShipping();
  }
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={Item6} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title" style={{ fontSize: "28px" }}>
                {item.name}
              </span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );

    return (
      <UserConsumer>
        {(customerState) => {
          return (
            <div className="container">
              <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">{addedItems}</ul>
              </div>
              {this.props.items.length ? (
                <div className="checkout">
                  <b>Total: {this.props.total} $</b>
                  <br />
                  <br />
                  <button
                    className="waves-effect waves-light btn-small"
                    onClick={() =>
                      this.checkOut(customerState.state.isLoggedIn)
                    }
                  >
                    Checkout
                  </button>
                </div>
              ) : null}

              {this.state.showPopup ? (
                <PopUp
                  text="Order has been placed successfully : "
                  closePopup={this.togglePopup.bind(this)}
                />
              ) : null}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartListReducer.addedItems,
    total: state.cartListReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch(removeItem(item));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    addShipping: () => {
      dispatch(addShipping());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(cart);
