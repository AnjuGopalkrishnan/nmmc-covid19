import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import SummaryData from "./components/summary-data.component";
import InsertPlace from "./components/insert-place.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <Route path="/" exact component={SummaryData} />
      <Route path="/edit/:id" component={SummaryData} />
      <Route path="/user" component={SummaryData} />
      <Route path="/place" component={InsertPlace} />
      <Footer/>
      </div>
    </Router>
  );
}

export default App;