import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
