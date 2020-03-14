import React from 'react';
import './style/App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from './scene/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
