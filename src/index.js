import React from "react";
import ReactDOM from "react-dom";
import ShoppingApp from "./ShoppingApp";
import RegisterApp from "./RegisterApp";
import "./index.css";

class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: false,
      errorMessage: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    // 模擬簡單的帳號密碼驗證，我設的帳密是 admin/admin
    if (username === "admin" && password === "admin") {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({
        errorMessage: (
          <>
            帳號或密碼錯誤
            <br />
            還沒註冊? 請點擊註冊按鈕!
          </>
        ),
      });
    }
  };

  handleRegister = () => {
    ReactDOM.render(<RegisterApp />, document.getElementById("root"));
  };

  render() {
    const { username, password, isAuthenticated, errorMessage } = this.state;

    if (isAuthenticated) {
      return <ShoppingApp />;
    }

    return (
      <div className="container">
        <h1>G2的購物網站</h1>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>帳號:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>密碼:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="登入" />
          <button type="button" onClick={this.handleRegister}>
            註冊
          </button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LoginApp />, rootElement);
