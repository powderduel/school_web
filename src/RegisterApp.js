import React from "react";

class RegisterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("確認密碼與確認密碼是否相符");
      return;
    }
    // 去吧後端，寫一個發送註冊請求

    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
  };

  render() {
    const { username, password, confirmPassword, email } = this.state;

    return (
      <div>
        <h1>註冊頁面</h1>
        <form onSubmit={this.handleSubmit}>
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
          <div>
            <label>確認密碼:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>電子郵箱:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="確認註冊" />
        </form>
      </div>
    );
  }
}

export default RegisterApp;
