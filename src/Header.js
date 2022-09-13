import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: "TOGGLE",
      toggle: false,
    });
    localStorage.removeItem("logged");
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header-right">
        {!toggle ? (
          <>
            <Link className="link-tag" to="/">LOGIN</Link>
            <Link className="link-tag" to="/signup">REGISTER</Link>
          </>
        ) : (
          <>
            <Link className="link-tag" to="/list">CONTACTS</Link>
            <Link className="link-tag" to="/" onClick={logout}>
              LOGOUT
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
