import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import React, {components} from react;
import {render} from "react-dom";

class App extends Component{

constructor(){
super();
this.state = {
name: "React",
count: 0

};
}

increment = () => {

  this.setState ({count: this.state.count+1});
}


render(){

  return(
  <div>
  <h1> Component Using State </h1>
  <p> Let's See </p>
  Count: {this.state.count}
  <br/>

  <button onClick = {this.increment} Increment />

  </div>  
  );
}
}


render (<App />),document.getElementById("root");
render (<App />),document.getElementById("root1");
