import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css"
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Firebase
import {initializeApp} from "firebase/app"
import "firebase/auth"
import { UserContext } from './context/UserContext';
import FirebaseConfig from './config/FirebaseConfig';

// init Firebase
initializeApp(FirebaseConfig)

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <React.Fragment>
      <Router>
      <ToastContainer />
        <UserContext.Provider value={{user, setUser}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Dashboard" exact component={Dashboard} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </React.Fragment>
  )
}

export default App
