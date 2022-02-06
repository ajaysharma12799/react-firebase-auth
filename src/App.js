import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>React & Firebase Authentication</title>
        <meta name="description" content="React and Firebase Authentication via Practical Implementation"/>
      </Helmet>
      <BrowserRouter>
        <Container>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/Signup" exact element={<Signup />} />
              <Route
                path="/Home"
                exact
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
