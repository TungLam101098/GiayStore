import './App.scss';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import React from 'react';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path='/' component={Home} exact={true} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
