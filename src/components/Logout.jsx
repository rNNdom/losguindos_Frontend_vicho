import React from "react";
import PropTypes from "prop-types";

export default function Logout({ setToken }) {
  localStorage.clear();
  setToken(null);
  return (
    <div>
      <h1>has salido</h1>
      <a href="/">Login</a>
    </div>
  );
}

Logout.propTypes = {
  setToken: PropTypes.func.isRequired,
};
