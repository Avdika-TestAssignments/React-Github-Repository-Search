import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Search from './Components/Search';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
