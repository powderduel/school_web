import React from "react";
import "./ShoppingApp.css";

class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "黑人白牙膏",
          price: "$10",
          isChecked: false,
          quantity: 0,
        },
        {
          id: 2,
          name: "白人黑牙膏",
          price: "$20",
          isChecked: false,
          quantity: 0,
        },
        {
          id: 3,
          name: "黑人黑牙膏",
          price: "$5",
          isChecked: false,
          quantity: 0,
        },
        {
          id: 4,
          name: "白人白牙膏",
          price: "$25",
          isChecked: false,
          quantity: 0,
        },
      ],
    };
  }

  handleProductCheckboxChange = (productId, isChecked) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return { ...product, isChecked, quantity: isChecked ? 1 : 0 };
      }
      return product;
    });

    this.setState({ products: updatedProducts });
  };

  handleQuantityChange = (productId, quantity) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: parseInt(quantity, 10) };
      }
      return product;
    });

    this.setState({ products: updatedProducts });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // 去吧後端，寫一個發送購買請求

    const updatedProducts = this.state.products.map((product) => {
      if (product.isChecked) {
        return { ...product, isChecked: false, quantity: 0 };
      }
      return product;
    });

    this.setState({ products: updatedProducts });
  };

  render() {
    const { products } = this.state;

    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        <h1>購物系統</h1>
        <p>說! 你要買啥?</p>
        <form onSubmit={this.handleSubmit}>
          <table className="shopping-table">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>價格</th>
                <th>選擇</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td className="checkbox-cell">
                    <input
                      type="checkbox"
                      checked={product.isChecked}
                      onChange={() =>
                        this.handleProductCheckboxChange(
                          product.id,
                          !product.isChecked
                        )
                      }
                    />
                    {product.isChecked && (
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={product.quantity}
                        onChange={(e) =>
                          this.handleQuantityChange(product.id, e.target.value)
                        }
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <input type="submit" className="purchase-button" value="確認購買" />
        </form>
      </div>
    );
  }
}

export default ShoppingApp;
