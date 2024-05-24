// Login.js
import React from "react";

export default function Login() {
  return (
    <div>
      <form>
      <h2>Login</h2>
        <div>
          <label htmlFor="userID">User ID:</label>
          <input type="text" id="userID" name="userID" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

//export default Login;
