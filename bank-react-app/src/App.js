import React from "react"; 
import './App.css';
import Content from './components/Content';
import Clock from './components/Clock';


function App() {
  return (
    <div className="App">
      <p>Hello User</p>
      <Clock></Clock>
      
			<Content></Content>
    </div>
  );
}

export default App;
