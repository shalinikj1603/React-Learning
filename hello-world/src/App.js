import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FrParentInput from './components/FrParentInput';
import Portaldemo from './components/Portaldemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RendPropsCounter from './components/RendPropsCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
class App extends Component{
  render(){
    return(
      <div className ='App'>
{/* 
        <RendPropsCounter 
        render ={(count,incrementCount) =>(
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        ) } />

        <RendPropsCounter 
        render ={(count,incrementCount) =>(
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} />
        */}
        <UserProvider value="Shalini">
        <ComponentC ></ComponentC>
        </UserProvider>
       

        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>
        <User render={(isLoggedIn)=>isLoggedIn?"Shalini":"Guest"}></User> */}
        {/* <ClickCounter name="Shalini"></ClickCounter>
        <HoverCounter></HoverCounter> */}
       {/* <ErrorBoundary>
        <Hero heroname="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <LifecycleA></LifecycleA> */}
        {/* <FragmentDemo></FragmentDemo> */}
        {/* <PureComp></PureComp> */}
        {/* <Table></Table> */}
        {/* <ParentComp></ParentComp> */}
        {/* <RefsDemo></RefsDemo> */}
        {/* <FocusInput></FocusInput> */}
        {/* <FrParentInput></FrParentInput> */}
        {/* <Portaldemo></Portaldemo> */}
      </div>
    );
  }
}

export default App;
