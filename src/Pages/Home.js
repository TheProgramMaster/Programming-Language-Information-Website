import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gavin from '../Components/Gavin.js';
import Purpose from '../Components/Purpose.js';
import NavigationTabs from '../Components/NavigationTabs.js';
import '../fontStyles/computertext.scss';


const me = {
    name: "Gavin Johnson",
    university: "Murray State University",
    degree: "Computer Science",
  };

const Home = () => {
    return (
        <div>
            <NavigationTabs></NavigationTabs>
            <div className="homeScreen">
            <Gavin name={me.name} 
                   university={me.university}
                   degree={me.degree}>
            </Gavin>
            <Purpose></Purpose>
            </div>
        </div>
    );
}

export default Home;