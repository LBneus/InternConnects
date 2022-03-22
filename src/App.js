import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import WelcomePage from './pages/welcome-page/welcome-page.pages';
import ConnectionPage from './pages/connection-page/connection-page.pages';
import AccountsPage from './pages/accounts-page/accounts-page.pages';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path='/connectionPage' component={ConnectionPage}/>
          <Route exact path='/accountsPage' component={AccountsPage}/>
      </Switch>
    </div>
  );
}

export default App;
