import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
const AboutPages = () => {
	return (
		<Card>
			<h1>About Pages</h1>
			<p>
				<Link to='/'>Home</Link>
			</p>
		</Card>
	);
};

export default AboutPages;
