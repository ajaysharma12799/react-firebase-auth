import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, signWithGoogle } = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signWithGoogle();
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mt-5 text-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="lead display-5 text-uppercase">Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control size="lg"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control size="lg"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-0"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button size="lg" variant="primary" className="rounded-0 w-100" type="submit">
          Login
        </Button>
      </Form>
      <div className="mt-3 mb-3">
        <GoogleButton className="w-100" onClick={handleGoogleLogin} />
      </div>
      <div className="mt-3 lead text-uppercase">
        Don't Have Account? <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
