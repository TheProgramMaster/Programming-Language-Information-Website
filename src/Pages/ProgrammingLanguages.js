import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationTabs from "../Components/NavigationTabs";
//import LanguageInformation from "../Components/LanguageInformation.js";

const ProgrammingLanguages = () => {
    return (
    <div>
        <NavigationTabs></NavigationTabs>
        <div className=".bg-primary-subtle">
            <h1>Programming Language Information</h1>
            <p>On this webpage, I have included a list
                of 10 of the most popular programming 
                languages in existence for the production
                process within the software development
                industry today.
            </p>
        </div>
    </div>
    );
};

export default ProgrammingLanguages;