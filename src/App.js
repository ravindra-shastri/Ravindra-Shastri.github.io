import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          >
          </Route>
          <Route
            path="/about"
            exact
            component={AboutMe}
          >
          </Route>
          <Route
            path="/projects"
            exact
            component={Projects}
          >
          </Route>
          <Route
            path="/contact"
            exact
            component={Contact}
          >
          </Route>
          <Route
            path="/resume"
            exact
            component={Resume}
          >
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}



export default App;