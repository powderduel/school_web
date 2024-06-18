import React from "react";
import "./ShoppingApp.css";

class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "黑牙膏", price: "$10", isChecked: false, quantity: 0, image: "https://example.com/image1.jpg" },
        { id: 2, name: "白牙膏", price: "$20", isChecked: false, quantity: 0, image: "https://example.com/image2.jpg" },
        { id: 3, name: "黑牙膏", price: "$5", isChecked: false, quantity: 0, image: "https://example.com/image3.jpg" },
        { id: 4, name: "白牙膏", price: "$25", isChecked: false, quantity: 0, image: "https://example.com/image4.jpg" },
        { id: 5, name: "綠牙膏", price: "$15", isChecked: false, quantity: 0, image: "https://example.com/image5.jpg" },
        { id: 6, name: "黃牙膏", price: "$18", isChecked: false, quantity: 0, image: "https://example.com/image6.jpg" },
        { id: 7, name: "藍牙膏", price: "$12", isChecked: false, quantity: 0, image: "https://example.com/image7.jpg" },
        { id: 8, name: "紅牙膏", price: "$22", isChecked: false, quantity: 0, image: "https://example.com/image8.jpg" },
        { id: 9, name: "紫牙膏", price: "$20", isChecked: false, quantity: 0, image: "https://example.com/image9.jpg" },
        { id: 10, name: "黑白牙膏", price: "$30", isChecked: false, quantity: 0, image: "https://example.com/image10.jpg" },
        { id: 11, name: "紅白牙膏", price: "$28", isChecked: false, quantity: 0, image: "https://example.com/image11.jpg" },
        { id: 12, name: "藍綠牙膏", price: "$32", isChecked: false, quantity: 0, image: "https://example.com/image12.jpg" },
      ],
      currentPage: 1,
      productsPerPage: 9,
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

    const updatedProducts = this.state.products.map((product) => {
      if (product.isChecked) {
        return { ...product, isChecked: false, quantity: 0 };
      }
      return product;
    });

    this.setState({ products: updatedProducts });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  handleGoBack = () => {
    this.setState(prevState => ({
      currentPage: Math.max(prevState.currentPage - 1, 1)
    }));
  };

  render() {
    const { products, currentPage, productsPerPage } = this.state;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const hasMoreProducts = indexOfLastProduct < products.length;

    return (
      <div className="content">
        <h1>迷因商城</h1>
        <p>說! 你要買啥?</p>
        <form onSubmit={this.handleSubmit}>
          <div className="product-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={product.isChecked}
                    onChange={() =>
                      this.handleProductCheckboxChange(product.id, !product.isChecked)
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
                </div>
              </div>
            ))}
          </div>  
        </form>
        <div className="purchase">
          <input type="submit" className="purchase-button" value="確認購買" />
        </div>
        <div className="pagination">
          {currentPage > 1 && (
            <button className="back-button" onClick={this.handleGoBack}>
              回前頁
            </button>
          )}
          {hasMoreProducts && (
            <button className="load-more-button" onClick={this.handleLoadMore}>
              載入更多
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ShoppingApp;
