import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import FactDetail from './FactDetail';

const Home = () => (
  <>
    <h1>Hello, Facto!</h1>
    <Link to="/fact">Random Fact</Link>
  </>
);

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/fact" component={FactDetail} />
      <Footer />
    </>
  </Router>
);

export default App;
