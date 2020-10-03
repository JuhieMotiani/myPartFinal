import React, { Component } from 'react';
import Album from './Components/Album/Album';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import PicContainer from './Components/PicContainer/PicContainer';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Album}></Route>
          <Route exact path='/image/1' component={PicContainer}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
