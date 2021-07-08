import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./index-auth.css";
const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>Password Reset</h1>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form action="" onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="form__label">Email</div>
          <input
            className="form__input"
            type="email"
            ref={emailRef}
            required
          ></input>
        </div>

        <button disabled={loading} className="btn" type="submit">
          Reset Password
        </button>
      </form>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <h3>
        Need an account? <Link to="/signup">Sign Up</Link>
      </h3>
    </div>
  );
};

export default ForgotPassword;
