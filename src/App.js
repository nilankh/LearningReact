import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import  Greet  from './components/Greet';
// // import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import NameList2 from './components/NameList2';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css' //this is how we import regular css
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';


// import  styles from './appStyles.module.css' // this is how we import module style css
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';



function App() {


  return (
    <div className="App">
      <Hero heroName="Batman" />
      <Hero heroName="Superman" />
      <Hero heroName="Joker" />
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}

      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* but regular style sheet will be work */}
      {/* <h1 className={styles.success}>Success</h1>  */}
      {/* css modules can not be used as child componet */}

      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <NameList2 /> */}

      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

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
