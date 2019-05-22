import React, { Component } from 'react';
import './components/Header/Header.css';
import header_logo from "./components/Header/header_logo.png";
import  Home from './components/Home/Home';
import  Explore from './components/Explore/Explore';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <header id="header">
            <div className="container">

              <Link to="/">
              <div id="logo">
                  <img className="img-responsive v1" src={header_logo} alt="logo"/>
                <div className="vl"><h1>Serendib</h1></div>
              </div>
              </Link>
              <nav id="nav-menu">
                <ul className="nav-menu">
                  <li><a href="#intro"><Link to="/">Home</Link></a></li>
                  <li><a href="#explore"><Link to="/explore">Explore</Link></a></li>
                </ul>
              </nav>

            </div>
          </header>
          <body id="body">
          {/*<empty>Do not add anything here</empty>*/}
          </body>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
