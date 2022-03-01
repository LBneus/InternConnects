import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import WelcomePage from './pages/welcome-page/welcome-page.pages';
import ConnectionPage from './pages/connection-page/connection-page.pages';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path='/connectionPage' component={ConnectionPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
