import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from  './appStyles.modules.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
class App extends Component{
  render(){
    return(
      <div className ='App'>
        <LifecycleA></LifecycleA>
       {/* <Form></Form> */}
        {/* <h1 className='error'>Error</h1>
        <h1 classNmae={styles.success}>Success</h1> */}
        {/* <Inline></Inline> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <EventBind></EventBind> */}
        {/* <Counter></Counter> */}
        {/* <Greet name='Bruce' heroname='Batman'><p>Hello batman</p></Greet>
        <Greet name='Clark' heroname='Superman'/>
        <Greet name='Diana' heroname='WonderWomen'/>
        <button> Action </button>
        <Welcome name='Bruce' heroname='Batman'/> 
        <Welcome name='Clark' heroname='Superman'/>  
        <Welcome name='Clark' heroname='Superman'/>
       <Hello /> 
        <Message></Message> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <List></List> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
      </div>
    );
  }
}

export default App;
