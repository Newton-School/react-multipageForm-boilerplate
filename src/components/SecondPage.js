import React, { useReducer, useRef } from "react";
import "../styles/styles.css";

const reducerFunction = (state, action) => {
  
};

const SecondPage = (props) => {
  const [state, dispatch] = useReducer();
  const emailRef = useRef(null);

  const nextHandler = (e) => {
   
  };
  const emailHandler = (e) => {
    
  };

  return (
    <div id="second-page">
      <div className="form-content">
        <label htmlFor="email">
          Email{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>{" "}
        </label>
        <input
          type="email"
          placeholder="Enter your Name"
          id="email"
          ref={emailRef}
          onChange={emailHandler}
          required
        />
        <span id="email-warning" className="warning">
          {" "}
          {state.emailMsg}{" "}
        </span>
      </div>
      <div className="form-content">
        <label htmlFor="profession">Profession </label>
        <input type="text" placeholder="Ex: Student" id="profession" />
      </div>
      <div className="form-content">
        <label htmlFor="city">City</label>
        <input type="text" placeholder="Enter your City" id="city" />
      </div>
      <div className="form-content">
        <label htmlFor="country">Country </label>
        <input type="text" placeholder="Ex: India" id="country" />
      </div>
      <div className="form-buttons">
        <button className="previous" id="prev-1" onClick={props.prev}>
          Previous
        </button>
        <button className="next" id="next-2" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
