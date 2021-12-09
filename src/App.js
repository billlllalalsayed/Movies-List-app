import React, { Component } from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import "./App.css";
import MovieForm from './components/movieForm';
import LoginForm from './components/loginform';
class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar/>
        <Switch>
       <Route path="/login" component={LoginForm}/>
       <Route path="/movies/:id" component={MovieForm}/>
       <Route path="/movies" component={Movies} />
       <Route path="/customers" component={Customers} />
       <Route path="/rentals" component={Rentals} />
       <Route path="/notFound" component={NotFound} />
       <Redirect from="/" exact to="/movies" />
       <Redirect to="/notFound" />
       </Switch>
       
      </main>
    );
  }
}

export default App;
