import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
// import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroname="Batman"/>
      <Greet name="Clark" heroname="Superman"/>
      <Greet name="Diana" heroname="Wonder Woman"/>
      {/* <Welcome /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
