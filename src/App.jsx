import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import WebDevelopment from "./Components/WebDevelopment";
import DataAnalytics from "./Components/DataAnalytics";
import IIT_Graduates from "./Components/IIT_Graduates";
import IIT_StudentsDataAnalytics from "./Components/IIT_StudentsDataAnalytics";
import IIT_StudentsDSA from "./Components/IIT_StudentsDSA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bootcamp-web-development" element={<WebDevelopment />} />
          <Route exact path="/bootcamp-data-analytics" element={<DataAnalytics />} />
          <Route exact path="/data-analytics-iitg-certification" element={<IIT_Graduates />} />
          <Route exact path="/student-training-cum-internship-certification-data-analytics" element={<IIT_StudentsDataAnalytics />} />
          <Route exact path="/student-training-cum-internship-certification-dsa" element={<IIT_StudentsDSA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
