import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmP: "",
  });
  const [AllUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmP) {
      alert("Password is not matching");
      navigate("/signup");
      inputs.email = "";
      inputs.password = "";
      inputs.confirmP = "";
      return;
    }
    setAllUsers([...AllUsers, inputs]);
    navigate("/");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  if (AllUsers.length !== 0) {
    localStorage.setItem("allUsers", JSON.stringify(AllUsers));
    console.log(AllUsers);
  }

  return (
    <div>
      <div className="signup-banner">
        <div className="form-box">
          <div className="form">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2 style={{ color: "white", marginBottom: "18px" }}>REGISTER</h2>
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
              <input
                type="password"
                name="confirmP"
                placeholder="Plese confirm Password.."
                value={inputs.confirmP}
                onChange={handleChange}
              />
              <button>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
