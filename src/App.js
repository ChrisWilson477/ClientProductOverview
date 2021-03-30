import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';


//styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const App = () => {
	const [hasError, setErrors] = useState(false);


	// async function fetchData() {
	// 	const res  = await fetch('')
	// }

	return (
		<Container fluid>
			<Row>
				<Col>
					<Navbar />
				</Col>
			</Row>
			<Row>
				<Col>
					<Overview />
				</Col>
			</Row>
		</Container>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
