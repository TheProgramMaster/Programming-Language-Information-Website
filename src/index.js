import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Gavin from './Components/Gavin.js';
import Purpose from './Components/Purpose.js';
import NavigationTabs from './Components/NavigationTabs.js';
import Home from "./Pages/Home.js";
import ProgrammingLanguages from "./Pages/ProgrammingLanguages.js";
import InterestingFacts from "./Pages/InterestingFacts.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  <div className="homeScreen">
    <NavigationTabs></NavigationTabs>
    <Gavin name={me.name} 
           university={me.university}
           degree={me.degree}>
    </Gavin>
    <Purpose></Purpose>
  </div>*/
  /*
  <>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/programminglanguages"
          element={<ProgrammingLanguages />}
        />
        <Route
          path="/interestingfacts"
          element={<InterestingFacts />}
        />
      </Routes>
    </Router>
  </>
  */
 /*<div>
    <Home></Home>
    <Router>
      <NavigationTabs />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/programminglanguages" component={ProgrammingLanguages} />
        <Route path="/interestingfacts" component={InterestingFacts} />
      </Routes>
    </Router>
  </div>*/
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
