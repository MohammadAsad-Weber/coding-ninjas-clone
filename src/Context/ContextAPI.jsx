import React, { createContext } from "react";

// Creating Context API for the web application
export const CodingNinjasContext = createContext();

function ContextAPI(props) {

  // Function for scroll event
  function scroll(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <CodingNinjasContext.Provider value={{ scroll }}>
      {props.children}
    </CodingNinjasContext.Provider>
  );
}

export default ContextAPI;
