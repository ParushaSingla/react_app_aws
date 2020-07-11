import React, {PureComponent } from "react";

class PopUp extends PureComponent {
  buttonPosition = {
    margin: "auto",
    top: "35px",
    left: "500px"
  };

  render() {
    const min = 1;
    const max = 100;
    const random = min + Math.trunc(Math.random() * (max - min));
    const orderId = "Order_Id_" + random;

    return (
      <div className="popup">
        <div className="popup_inner" style={{padding: "10px"}}>
          <b>
            <h5>
              {this.props.text} {orderId}
            </h5>
          </b>
          <button
            className="waves-effect waves-light btn-small"
            style={this.buttonPosition}
            onClick={this.props.closePopup}
          >
            close me
          </button>
        </div>
      </div>
    );
  }
}
export default PopUp;
