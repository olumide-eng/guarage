import React from 'react';

import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <Switch>


   <Route exact path='/' component={Home}/>
   <Route exact path='/Services' component={Services}/>
   <Route exact path='/Services/:slug' component={SingleService}/>
   <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
