import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import About from './components/About/About';
/**
 * App Is The Parent Component
 */
class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App container">
                    <Route exact path="/about" component={About} />
                <Header/>
          <br />
              <Content/>
        <Footer/>
            </div>
    </BrowserRouter>
    );
  }
}

export default App;
