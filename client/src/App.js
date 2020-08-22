import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavbarCustom from "./components/navbar.component";
import SummaryData from "./components/summary-data.component";
import Hotspots from "./components/hotspots.component";
import About from "./components/about.component";

function App() {
  return (
    <Router>
      <div className="container">
      <NavbarCustom />
      <Route path="/" exact component={SummaryData} />
      <Route path="/edit/:id" component={SummaryData} />
      <Route path="/hotspots" component={Hotspots} />
      <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;