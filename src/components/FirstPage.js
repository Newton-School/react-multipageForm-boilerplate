import React, { useRef, useReducer, Fragment } from "react";
import "../styles/styles.css";

const reducerFunction = (state, action) => {
 
};

const FirstPage = (props) => {
  const nameRef = useRef();
  const mobileRef = useRef();

  const [state, dispatch] = useReducer();

  const nameHandler = (e) => {
   
  };

  const numberHandler = (e) => {
    
  };

  const nameFocusHandler = () => {
    
  };

  const mobileFocusHandler = () => {
   
  };

  const onClickHandler = (e) => {
    
  };

  return (
    <div id="first-page">
      <div className="form-content" id="name-field">
        <label htmlFor="name">
          Name{" "}
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
          type="text"
          placeholder="Enter your Name"
          ref={nameRef}
          onFocus={nameFocusHandler}
          onChange={nameHandler}
          id="name"
        />
        <span className="warning" id="name-warning">
          {" "}
          {state.nameMsg}{" "}
        </span>
      </div>
      <div className="form-content" id="number-field">
        <label htmlFor="number">
          Mobile Number{" "}
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
          type="text"
          placeholder="Enter your Mobile Number"
          ref={mobileRef}
          onChange={numberHandler}
          onFocus={mobileFocusHandler}
          id="number"
        />
        <span className="warning" id="mobile-warning">
          {" "}
          {state.mobileMsg}{" "}
        </span>
      </div>
      <div className="form-buttons">
        <button className="next" id="next-1" onClick={onClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
