import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import LandingPage from './components/Pages/Landing';
import Landing2 from './components/Pages/Landing2';
import Beats from './components/Pages/Beats';

// const Landing = () => {
//   <div>
//     <Landing />
//   </div>
// };

// const Beats = () => {
//   <div>
//     <Beats />
//   </div>
// };

// const Contact = () => {
//   <div>
//     <Contact />
//   </div>
// };

function App() {
  return (
    <Router>
    <div className="App">
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Landing2} />
            <Route exact path="/beats" component={Beats} />
          </Switch>
        </AnimatePresence>
    </div>
    </Router>
  );
}

export default App;
