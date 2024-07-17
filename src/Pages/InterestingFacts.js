import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationTabs from "../Components/NavigationTabs";
import InterestingInformation from "../Components/InterestingInformation";

const InterestingFacts = () => {
    return (
        <div>
            <div>
                <NavigationTabs></NavigationTabs>
                <h1>Some Interesting Facts!!!</h1>
                <p>On this webpage, I have included Some
                    interesting facts pertaining to each programming
                    language we have listed on our "Programming Languages"
                    webpage, in order to demonstrate some applications
                    of each language.
                </p>
            </div>
            <InterestingInformation></InterestingInformation>
        </div>
    )
};

export default InterestingFacts;