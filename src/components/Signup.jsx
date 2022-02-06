import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Helmet } from 'react-helmet';

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { signup } = useUserAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		try {
			await signup(email, password);
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<React.Fragment>
		<Helmet>
        	<title>Signup | React & Firebase Authentication</title>
        	<meta name="description" content="Signup | React and Firebase Authentication via Practical Implementation"/>
      	</Helmet>
		<div className="mt-5 text-center">
			<h1 className="lead display-5 text-uppercase">Signup</h1>
			{error && <Alert className="w-100" variant="danger">{error}</Alert>}
			<Form onSubmit={handleSubmit}>
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
					Signup
				</Button>
			</Form>
			<div className="mt-3 lead text-uppercase">
				Already Have Account? <Link to="/">Signin</Link>
			</div>
		</div>
		</React.Fragment>
	);
};

export default Signup;
