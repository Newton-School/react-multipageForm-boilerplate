import React, { useState } from "react";
import "../styles/App.css";
import "../styles/styles.css";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
const App = () => {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);

  const firstPageHandler = () => {
   
  };

  const secondPrevHandler = (e) => {
   
  };
  const secondNextHandler = () => {
   
  };

  const thirdPrevHandler = (e) => {
   
  }

  return (
    <div id="container">
      <div className="form-container">
        <h1 className="form-container-header">
          Newton Application{" "}
          <span>Please fill the following form with appropriate details</span>{" "}
        </h1>
        <form action="/">
        
        

        </form>
      </div>
    </div>
  );
};

export default App;
