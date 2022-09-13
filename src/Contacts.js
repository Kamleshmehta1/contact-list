import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Form.css";

function Contacts() {
  const user = useSelector((state) => state.user);
  const [AllUsers, setAllUsers] = useState([]);

  useEffect(() => {}, [AllUsers]);

  const [inputs, setInputs] = useState({
    img: "",
    name: "",
    number: "",
  });
  let localData = JSON.parse(localStorage.getItem(`${user}`));
  console.log(localData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllUsers([...AllUsers, inputs]);
    localStorage.setItem(`${user}`, JSON.stringify(AllUsers));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="signup-banner">
        <div className="form-box">
          <div className="form">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2 style={{ color: "white", marginBottom: "18px" }}>
                Enter Contacts Details
              </h2>
              <input
                type="text"
                name="img"
                placeholder="Enter the User Image..."
                value={inputs.img}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter Name.."
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
              <input
                type="number"
                name="number"
                minLength={10}
                placeholder="Enter the Number..."
                value={inputs.number}
                onChange={handleChange}
              />
              <button type="submit">ADD CONTACT</button>
            </form>
          </div>
        </div>
      </div>
      {localData
        ? localData.map((ele, index) => (
            <div className="container" key={index}>
              <div className="img-tag">
                {/* <img src={ele.img} alt="no-image" /> */}
                <div className="logo">{ele.name.toString().slice(0,1).toUpperCase()}</div>
              </div>
              <div className="child-cont">
                <p>{ele.name}</p>
              </div>
              <div className="child-cont">
                <p>{ele.number}</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default Contacts;
