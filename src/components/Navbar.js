import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../images/acme_logo.png';

const Navbar = () => {
	return (
		<Container fluid>
			<Row className="header">
				<Col>
					{' '}
					<img src={Logo} alt="Acme logo" className="logo" />
				</Col>
				<Col className="navbar">
					<ul className="main-nav">
						<li>
							<a href="#men">Men</a>
						</li>
						<li>
							<a href="#men">Women</a>
						</li>
						<li>
							<a href="#men">Youth</a>
						</li>
					</ul>
				</Col>
				<Col className='search-bar'>Search</Col>
			</Row>
			<Row>
				<Col className="clothing-description">Clothing</Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default Navbar;
