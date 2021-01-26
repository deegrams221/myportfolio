import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
