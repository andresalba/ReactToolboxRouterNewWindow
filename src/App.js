import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <>
      <h1>Algo</h1>
      <Router>
        <Routes>
          <Route exact path="/geeks/second" element={SecondComponent}></Route>
          <Route exact path="/geeks/first" element={FirstComponent}></Route>
        </Routes>
        <ul>
          <br />
          <li>
            {/* Link component uses the to prop
            to describe the location where the
            links should navigate to. */}
            <Link to="/geeks/first" target="_blank">
            Open First Component
            </Link>
          </li>
          <br />
          <li>
            <Link to="/geeks/second" target="_blank">
            Open Second Component
            </Link>
          </li>
        </ul>
      </Router>
    </>
  );
}
export default App;

