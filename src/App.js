import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from './Pages/Home.js';
import ProgrammingLanguages from './Pages/ProgrammingLanguages.js';
import InterestingFacts from './Pages/InterestingFacts.js';
import Navbar from './Components/Navbar.js';

function App() {
  /*state = {
    details: [],
    user: "",
    quote: "",
  };
  componentDidMount() {
    let data;
    axios.get('http://localhost:8000/wel/')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {})
  }
  renderSwitch = (param) => {
    switch (param + 1) {
      case 1:
        return "primary";
      case 2:
        return "secondary";
      case 3:
        return "success";
      case 4:
        return "danger";
      case 5:
        return "warning";
      case 6:
        return "info";
      default:
        return "yellow";
    }
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhose:8000/wel/",{
        name: this.state.user,
        detail: this.state.quote,
      })
      .then((res) => {
        this.setState({
          user: "",
          quote: "",
        });
      })
      .catch((err) => {});
  };
  render(){
  return (
    <div className="container jumbotron">
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              {" "}
              Author{" "}
            </span>
          </div>
          <input type="text" className="form-control"
            placeholder="Name of the Poet/Author"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.user} name="user"
            onChange={this.handleInput} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group=text">
              Your Quote
            </span>
          </div>
          <textarea className="form-control "
                    aria-label="With textarea"
                    placeholder="Tell us what you think of ....."
                    value={this.state.quote} name="quote"
                    onChange={this.handleInput}>
          </textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
        </form>
        <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }} />
        {this.state.details.map((detail, id) => (
          <div key={id}>
            <div className="card shadow-lg">
              <div className={"bg-" + this.renderSwitch(id % 6) +
                              " card-header"}>Quote {id + 1}</div>
              <div className="card-body">
                <blockquote className={"text-" + this.renderSwitch(id % 6) +
                                      " blockquote mb-0"}>
                                        <h1> {detail.detail} </h1>
                                        <footer className="blockquote-footer">
                                          {" "}
                                          <cite title="Source Title">{detail.name}</cite>
                                        </footer>
                                      </blockquote>
              </div>
            </div>
            <span className="border border-primary "></span>
          </div>
        ))}
    </div>
  );
}*/
    /*state = {
      details : [],
    }

    componentDidMount() {
      let data;
      axios.get('http://localhost:8000/wel/')
      .then(res => {
        data = res.data;
        this.setState({
          details : data
        });
      })
      .catch(err => {})
    }
    render(){
    return(
      <div>
        {this.state.details.map((detail, id) => (
          <div key={id}>
          <div>
            <div>
            <h1>{detail.detail}</h1>
            <footer>--- by
              <cite title="Source Title">
                {detail.name}
              </cite>
            </footer>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
  }*/
 /*const navigate = useNavigate();
 function handleHomeClick(event) {
  navigate('/');
 }
 function handleProgrammingLanguagesClick(event){
  navigate('/programminglanguages');
 }
 function handleInterestingFactsClick(event){
  navigate('/interestingfacts');
 }*/
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programminglanguages" element={<ProgrammingLanguages />} />
        <Route path="/interestingfacts" element={<InterestingFacts />} />
      </Routes>
    </Router>
  );
}

export default App;
