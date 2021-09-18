import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Action from './pages/Action';
import Drama from './pages/Drama';
import Crime from './pages/Crime';
import Thriller from './pages/Thriller';
import Watch_List from './pages/Watch_List';

import Navbarmenu from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Action" component={Action} />
          <Route path="/Drama" component={Drama} />
          <Route path="/Crime" component={Crime} />
          <Route path="/Thriller" component={Thriller} />
          <Route path="/Watch_List" component={Watch_List} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;