import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let Alluser = JSON.parse(localStorage.getItem("allUsers"));

    for (let user of Alluser) {
      if (user.email === inputs.email && user.password === inputs.password) {
        navigate("/list");
        localStorage.setItem("logged", true);
        dispatch({
          type: "TOGGLE",
          toggle: true,
        });
        dispatch({
          type: "USER",
          user: user.email,
        });
      }
    }
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <div className="signup-banner">
        <div className="form-box">
          <div className="form">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2 style={{ color: "white", marginBottom: "18px" }}>LOGIN</h2>
              <input
                type="text"
                placeholder="Enter Email.."
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password.."
                value={inputs.password}
                onChange={handleChange}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
