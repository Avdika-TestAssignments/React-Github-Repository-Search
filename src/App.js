import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Search from './Pages/Search';
import About from './Pages/About';

function App () {
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
