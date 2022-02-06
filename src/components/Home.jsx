import React from "react";
import { Button, Card } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
	const { user, signout } = useUserAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signout();
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="mt-5">
			<Card style={{ width: '50rem' }} className="rounded-0 w-100 text-center">
  				<Card.Body>
    				<Card.Title>Welcome {user.email}</Card.Title>
  				</Card.Body>
				<Button
					onClick={handleSubmit}
					variant="primary"
					className="rounded-0 w-100"
				>
					Logout
				</Button>
			</Card>
		</div>
	);
};

export default Home;
