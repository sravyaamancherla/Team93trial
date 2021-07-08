import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./index-auth.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/main");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="auth-wrapper">
      <div className="container">
        <h1 className="signup__header">Login</h1>
        {error && <p>{error}</p>}
        <form action="" onSubmit={handleSubmit}>
          <div className="form__control">
            <div className="form__label">Email</div>
            <input
              className="form__input"
              type="email"
              ref={emailRef}
              required
            ></input>
          </div>
          <div className="form__control">
            <div className="form__label">Password</div>
            <input
              className="form__input"
              type="password"
              ref={passwordRef}
              required
            ></input>
          </div>

          <button disabled={loading} className="btn" type="submit">
            Log In
          </button>
        </form>
        <small>
          Forgot
          <Link to="/forgot-password"> Password?</Link>
        </small>
        <div className="footer-text">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
