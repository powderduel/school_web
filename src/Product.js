//Product.js
import React from "react";

class Product extends React.Component {
  handleCheckboxChange = (event) => {
    const { id, isChecked, onChange } = this.props;
    onChange(id, !isChecked);
  };

  render() {
    const { name, isChecked } = this.props;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckboxChange}
          />
          {name}
        </label>
      </div>
    );
  }
}

export default Product;
