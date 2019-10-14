import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute.js';

import Login from "./components/Login";
import BubblesPage from './components/BubblePage.js';
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path='/bubbles' component={BubblesPage} />
      </div>
    </Router>
  );
}

export default App;
