import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import pages from './pages';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <Route component={pages.Main} exact path="/" />
        <Route component={pages.About} exact path="/about" />
        <Route component={pages.Blog} exact path="/blog" />
        <Route component={pages.Works} exact path="/work" />
        <Route component={pages.Skills} exact path="/skills" />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
