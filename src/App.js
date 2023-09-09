import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Restaurant from './components/Restaurant'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import CartContext from './context/CartContext'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/restaurant/:id" component={Restaurant} />
    <ProtectedRoute exact path="/Cart" component={Cart} />
    <ProtectedRoute exact path="/bad-path" component={NotFound} />
    <Redirect to="bad-path" />
  </Switch>
)

export default App
