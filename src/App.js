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

const App = () => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		productData: {},
	// 		styleData: {},
	// 	};
	// 	this.getData = this.getData.bind(this);
	// }

	// componentDidMount() {
	// 	this.getData();
	// }

	// async getData() {
	// 	await axios
	// 		.get('http://52.26.193.201:3000/products/1')
	// 		.then((res) => res.data)
	// 		.then((data) =>
	// 			this.setState({
	// 				productData: data,
	// 			})
	// 		);
	// 	await axios
	// 		.get('http://52.26.193.201:3000/products/1/styles')
	// 		.then((res) => res.data)
	// 		.then((data) =>
	// 			this.setState({
	// 				styleData: data,
	// 			})
	// 		)
	// 		.catch((err) => err);
	// }

	// render() {
	// 	const name = this.state.productData.name;
	// 	const id = this.state.productData.id;
	// 	const slogan = this.state.productData.slogan;
	// 	const description = this.state.productData.description;
	// 	const default_price = this.state.productData.default_price;
	// 	const category = this.state.productData.category;
	// 	const styleData = this.state.styleData;

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
							// name={name}
							// id={id}
							// category={category}
							// defaultPrice={default_price}
							// slogan={slogan}
							// description={description}
							// styleData={styleData}
						/>
					</Col>
				</Row>
			</Container>
		);
	}


ReactDOM.render(<App />, document.getElementById('root'));
