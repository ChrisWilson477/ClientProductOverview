import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../images/acme_logo.png';

const Navbar = () => {
	return (
		<Row className='header'>
			<Row className="header-row">
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
							<a href="#women">Women</a>
						</li>
						<li>
							<a href="#youth">Youth</a>
						</li>
					</ul>
				</Col>
				<Col className='search-bar'>
					<input className='search-bar-input' type='text' placeholder='Search...' />
					<input className='search-bar-btn' type='submit' value='Search' />
				</Col>
			</Row>
		</Row>

	);
};

export default Navbar;
