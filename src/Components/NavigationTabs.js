import { React } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter as Router, 
    Routes,
    Route,
    Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Pages/Home.js';
import ProgrammingLanguages from '../Pages/ProgrammingLanguages.js';
import InterestingFacts from '../Pages/InterestingFacts.js';

/*function HomeButton(){
    let navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return(
        <div>
            <button class="btn btn-primary" onClick={handleClick}>Home</button>
        </div>
    );
}

function ProgrammingLanguagesButton(){
    let navigate = useNavigate();
    function handleClick() {
        navigate("/programminglanguages");
    }
    return(
        <div>
            <button class="btn btn-primary" onClick={handleClick}>Programming Languages</button>
        </div>
    );
}

function InterestingFactsButton(){
    let navigate = useNavigate();
    function handleClick() {
        navigate("/interestingfacts");
    }
    return(
        <div>
            <button class="btn btn-primary" onClick={handleClick}>Interesting Facts</button>
        </div>
    );
}*/

function NavigationTabs(){
    return (
        <>
        </>
    );
}

export default NavigationTabs;