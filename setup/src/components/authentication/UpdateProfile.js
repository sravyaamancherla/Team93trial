import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./index-auth.css";
const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // Password Validation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/main");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="container">
      <h1 className="signup__header">Update Profile</h1>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <div className="form__control">
          <div className="form__label">Email</div>
          <input
            className="form__input"
            type="email"
            ref={emailRef}
            defaultValue={currentUser.email}
            required
          ></input>
        </div>
        <div className="form__control">
          <div className="form__label">Password</div>
          <input
            className="form__input"
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
          ></input>
        </div>
        <div className="form__control">
          <div className="form__label">Password Confirmation</div>
          <input
            className="form__input"
            type="password"
            ref={passwordConfirmRef}
            placeholder="Leave blank to keep the same"
          ></input>
        </div>
        <button disabled={loading} className="btn" type="submit">
          Update
        </button>
      </form>
      <div>
        Already have an account? <Link to="/main">Cancel</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
