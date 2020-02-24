import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import Details from './views/Details';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path = '/' />
        <Details path = '/product/:id'/>
        <Update path = '/product/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
