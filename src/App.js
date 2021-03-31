import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import axios from 'axios';

//styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			name: '',
		};
		this.getData = this.getData.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios
			.get('http://52.26.193.201:3000/products/1')
			.then((res) => res.data)
			.then((data) =>
				this.setState({
					category: data.category,
					default_price: data.default_price,
					description: data.description,
					id: data.id,
					name: data.name,
					slogan: data.slogan,
				})
			)
			.catch((err) => err);
	}

	render() {
		const name = this.state.name;
		const id = this.state.id;
		const slogan = this.state.slogan;
		const description = this.state.description;
		const default_price = this.state.default_price;
		const category = this.state.category;

		return (
			<Container fluid>
				<Row>
					<Col>
						<Navbar />
					</Col>
				</Row>
				<Row>
					<Col>
						<Overview
							name={name}
							id={id}
							category={category}
							default_price={default_price}
							slogan={slogan}
							description={description}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
