import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainLanding from './components/Pages/MainLanding';
import Landing2 from './components/Pages/Landing2';
import Beats from './components/Pages/Beats';

import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="App">
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={MainLanding} />
              <Route exact path="/beats" component={Landing2} />
            </Switch>
          </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
