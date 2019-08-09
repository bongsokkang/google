import React, { Component } from "react";
import logo from './logo.svg';
import "./First.css";
import API from "../../utils/API";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Panel from "../../components/Panel";
import MovieDetail from "../../components/MovieDetail";
import Col from "../../components/Col";


class First extends Component {

  state = {
    result:{},
    f: ""
  };

componentDidMount (){
  this.searchMovies("Sting");
}

searchMovies (query){
  API.search(query)
  .then(res => console.log (res)) 
    
    // this.setState({
    // result:res.data
  // }))
  
};


handleinput = event => {
  const name = event.target.name;
  let value = event.target.value;
this.setState({
  [name]:value
});
};



second = event => {
  event.preventDefault();
if (this.state.number1){
  alert( "SUCCESS!"
  );
};
this.setState({
  number1:"",
  number2:"",
  number3:""
});
};

EB = event => {
    event.preventDefault();
if (this.state.start){
    this.searchMovies(this.state.start);
};
  fetch(this.state.result);
    this.setState({
      start: "",
      end:"",
      location:""
    });
  };


  render() {
    return (
      <div className="First">
        <div className="Projects">
      <form>
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
     
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
        <button src={logo} formAction="https://www.google.com">
          <img src={logo} alt="logo" className="First-logo"></img></button>
          </form>
        </div>

      <div className="setstate">
        <form>
        <input 
        type="text" 
        name="start"
        onChange={this.handleinput}
        value={this.state.start}
        placeholder="starting"
        
        ></input>
        <input 
        type="text" 
        name="end" 
        onChange={this.handleinput}
        value={this.state.end}
        placeholder="ending"
        
        ></input>
        <input
        type="text"
        name="location"
        value={this.state.location}
        onChange={this.handleinput}
        placeholder="location"
        ></input>
        <input type="submit" onClick={this.EB}></input>

        </form>
      </div>
          
      <div className="setstate">
        <form>
        <input 
        type="text" 
        name="number1"
        onChange={this.handleinput}
        value={this.state.number1}
        
        ></input>
        <input 
        type="text" 
        name="number2" 
        onChange={this.handleinput}
        value={this.state.number2}
        
        ></input>
        <input
        type="text"
        name="number3"
        value={this.state.number3}
        onChange={this.handleinput}
        ></input>
        <input type="submit" onClick={this.second}></input>

        </form>
      </div>
      <Container>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title}
                ? <MovieDetail
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                  />
            </Panel>
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
      </Container>

      </div>
    );
    
  }
  
};

export default First;