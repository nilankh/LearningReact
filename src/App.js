import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
// import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {


  return (
    <div className="App">
      <EventBind />

      {/* <FunctionClick />
      <ClassClick /> */}


      {/* <Counter /> */}

      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Batman"/>
      <Greet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Action</button>
      </Greet>
      
      <Greet name="Diana" heroname="Wonder Woman"/> */}
      {/* <Welcome name="Bruce" heroname="Batman" />
      <Welcome name="Clark" heroname="Superman" />
      <Welcome name="Diana" heroname="Wonder Woman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
