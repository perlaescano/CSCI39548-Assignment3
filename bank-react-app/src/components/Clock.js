
import React, { Component }  from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style ={{display:"block", width:"100%", backgroundColor:"black"}}>
        <div style = {{display: "flex", flexFlow: "row", width:"100%",}}>
          
          <div style = {clockBox}>
            <div style = {clockStyling}>
              <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
          </div>
          
        </div>
      </div>

    );
  }
  
}

const clockBox = {
  display:"block", 
  borderRadius: "10%",
  backgroundColor:"beige",
  marginLeft:"auto",
  marginRight:"auto",
  marginTop:"10px",
  marginBottom:"10px",
  textAlign:"center"
}
const clockStyling ={
  //marginLeft: "45%",
  //marginRight: "auto",
  order: 1,
  width: "200px",
  //backgroundColor: "#f4fcd9",
  
  
}

export default Clock;