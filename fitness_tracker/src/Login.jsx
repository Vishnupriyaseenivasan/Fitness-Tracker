import React, { useState } from "react";
import image1 from "./images/fitness.avif";
import logo from "./images/logo.png";
import image2 from "./images/register img.jpg";
import "./App.css";
import { useNavigate } from "react-router-dom";

// Reusable Button Component
const Button = ({ text, onClick, value, onChange }) => (
  <button
    onClick={onClick}
    value={value}
    onChange={onChange}
    style={{
      padding: "7px 140px",
      border: "none",
      cursor: "pointer",
      borderRadius: "10px",
      margin: "10px 60px",
    }}
  >
    {text}
  </button>
);

// Login Form Component
const LoginForm = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="background">
      <br />
      <br />
      <div className="loginbox d-flex">
        <div>
          <img src={image1} alt="hhh" className="fitness text-success" />
        </div>
        <div>
          <img src={logo} alt="logo" className="logo " />
          <br />
          <h2 style={{ margin: "10px 160px 10px" }}>Login</h2>
          <h2 style={{ margin: "10px 80px 10px" }}>Welcome back !</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Login" onClick={handleLogin} />
          <p style={{ margin: "10px 50px" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "green", cursor: "pointer" }}
              onClick={onSwitchToRegister}
            >
              Register
            </span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

// Registration Form Component
const RegistrationForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const InputFieldValue = e.target.value;
    const domain = "@gmail.com";

    // Prevent appending if the user deletes or edits naturally
    if (InputFieldValue.endsWith(domain)) {
      setEmail(InputFieldValue);
      return;
    }

    let updatedValue = InputFieldValue;

    // Remove the domain if the user edits it
    if (InputFieldValue.includes(domain)) {
      updatedValue = InputFieldValue.replace(domain, "");
    }

    // Append the domain if the user input doesn't have it yet
    if (updatedValue && !updatedValue.includes("@")) {
      updatedValue += domain;
    }

    setEmail(updatedValue);
  };
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered with Username: ${username}, Email: ${email}`);
  };
  return (
    <div className="backgroundRegister">
      <br />
      <br />
      <form>
        <div className="loginbox d-flex">
          <div style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", height: "135px", marginTop: "2px" }}
            />
            <br />
            <h4>Please Fill out form to Register</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              id="username"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button text="Register" value="submit" onClick={handleRegister} />
            <p>
              Yes, I have an account?{" "}
              <span
                style={{ color: "green", cursor: "pointer" }}
                onClick={onSwitchToLogin}
              >
                Login
              </span>
            </p>
          </div>
          <div>
            <img src={image2} alt="hhh" className="fitness text-success" />
          </div>
        </div>
      </form>
    </div>
  );
};

// Main Component
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Login;
