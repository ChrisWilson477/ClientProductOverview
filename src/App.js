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
			product_id: 1,
			productData: {},
			styleData:{}
		};

	}

	componentDidMount() {
		axios
			.get(`http://52.26.193.201:3000/products/${this.state.product_id}`)
			.then((res) => res.data)
			.then((data) =>
				this.setState({
          productData: data
				})
			)
			axios.get(`http://52.26.193.201:3000/products/${this.state.product_id}/styles`)
			.then((res) => res.data)
			.then((data) =>
			  this.setState({
					styleData: data
				})
				)
			.catch((err) => err);
	}

	render() {
		// const name = this.state.name;
		// const id = this.state.id;
		// const slogan = this.state.slogan;
		// const description = this.state.description;
		// const default_price = this.state.default_price;
		// const category = this.state.category;
    // const styleName = this.state.styleName;
		// const photos = this.state.photos;
		// const skus = this.state.skus;
		// const salePrice = this.state.salePrice;
  const productData = this.state.productData;
	const styleData = this.state.styleData.results[0];

		return (


			<Container fluid>
				<Row>
					<Col>
						<Navbar />
					</Col>
				</Row>
				<Row>
					<Col>
					{console.log(this.state.productData)}
					{console.log(this.state.styleData)}
						<Overview
						  productData={productData}
							styleData={styleData}
							// name={name}
							// id={id}
							// category={category}
							// defaultPrice={default_price}
							// slogan={slogan}
							// description={description}
							// styleName={styleName}
					    // photos={photos}
					    // skus={skus}
					    // salePrice={salePrice}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
