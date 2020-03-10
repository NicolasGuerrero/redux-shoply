import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import ItemList from './ItemList';
import ItemDetail from './ItemDetail'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/products/:id">
          <ItemDetail cantFind={"/"}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
