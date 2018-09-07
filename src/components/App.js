import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Amps from './movies/Amps';
import About from './favorites/About';
// import Favorites from './favorites/Favorites';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/amps" component={Amps}/>
              <Redirect to="/home"/>
            </Switch>
          </main>
          
        </div>
      </Router>
    );
  }
}

export default App;