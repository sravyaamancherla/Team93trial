import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { StyledFirebaseAuth } from "react-firebaseui";
import "./index-auth.css";
import firebase from "firebase";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        history.push("/main");
      },
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Password Validation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="auth-wrapper">
      <div className="container">
        <h1 className="signup__header">Signup</h1>
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
          <div className="form__control">
            <div className="form__label">Password Confirmation</div>
            <input
              className="form__input"
              type="password"
              ref={passwordConfirmRef}
              required
            ></input>
          </div>
          <button disabled={loading} className="btn" type="submit">
            Sign Up
          </button>
        </form>

        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <div className="footer-text">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
