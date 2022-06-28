import React, { Fragment } from "react";
import "../styles/styles.css";

const ThirdPage = (props) => {
  const submitHandler = (e) => {
    
  };

  return (
    <div id="third-page">
      <div className="form-content">
        <label htmlFor="university">University </label>
        <input
          type="text"
          placeholder="Ex: Stanford University"
          id="university"
        />
      </div>
      <div className="form-content">
        <label htmlFor="branch">Branch </label>
        <select name="branch" id="branch">
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics</option>
          <option value="Mech">Mechanical</option>
          <option value="Nature">Nature</option>
        </select>
      </div>
      <div className="form-content">
        <label htmlFor="graduate">Graduation </label>
        <select name="graduate" id="graduate">
          <option value="UG">Under Graduate</option>
          <option value="PG">Post Graduate</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-buttons">
        <button className="previous" id="prev-2" onClick={props.prev}>
          Previous
        </button>
        <button
          className="next"
          type="submit"
          id="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
