import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Action from './pages/Action';
import Drama from './pages/Drama';
import Crime from './pages/Crime';
import Thriller from './pages/Thriller';
import Watch_List from './pages/Watch_List';
import MoviesDetials from './components/MoviesDetails/MoviesDetials';
import Footer from './components/Footer/Footer';

import Navbarmenu from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router basename="/">

        <Navbarmenu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Action" component={Action} />
          <Route path="/Drama" component={Drama} />
          <Route path="/Crime" component={Crime} />
          <Route path="/Thriller" component={Thriller} />
          <Route path="/Watch_List" component={Watch_List} />
          <Route path="/MoviesDetails" component={MoviesDetials} />
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;