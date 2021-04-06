import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './Ratings';
import StyleColors from './StyleColors';

import { Row, Col } from 'react-bootstrap';

const ProductDescription = ({ styleId }) => {
	const [productData, setProductData] = useState({});
	const [styleData, setStyleData] = useState([]);
	const [styleAttributes, setStyleAttributes] = useState([]);

	useEffect(async () => {
		const productResult = await axios(
			`http://52.26.193.201:3000/products/${styleId}`
		);
		setProductData(productResult.data);
		const styleResult = await axios(
			`http://52.26.193.201:3000/products/${styleId}/styles`
		);
		setStyleData(styleResult.data.results);
		setStyleAttributes(styleResult.data.results[0]);
	}, []);

	return (
		<Col sm={4} className="right-col">
			<h3>
				{productData.name}
				{' -'}
				{productData.category}
			</h3>
			<div>
				<Ratings />
				<p className="overview-price">
					{'$'}
					{styleAttributes.sale_price}
					{'.00'}
					<span
						style={{
							textDecoration: 'line-through',
							paddingLeft: '20px',
							color: '#000',
						}}
					>
						{'$'}
						{productData.default_price}
						{'.00'}
					</span>
				</p>
				<p className="reduced">REDUCED PRICE!</p>
				<p className="product-description">{productData.description}</p>
			</div>
			<div>
				<div className="quantity box">
					<p>
						<strong>Quantity</strong>
					</p>
					{/* <button type="button" className="button">
						-
					</button> */}
					<select type="select" className="quantity-input">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
					{/* <button type="button" className="button">
						+
					</button> */}
				</div>
				<div className="color box">
					<p>
						<strong>Color</strong>
					</p>
					<StyleColors styleData={styleData} />
				</div>
				<div className="size box">
					<p>
						<strong>Size</strong>
					</p>
					<div className="size-choices">
						<button className="thumbnail size-text">XS</button>
						<button className="thumbnail size-text">S</button>
						<button className="thumbnail size-text">M</button>
						<button className="thumbnail size-text">L</button>
						<button className="thumbnail size-text">XL</button>
						<button className="thumbnail size-text">XXL</button>
					</div>
				</div>
				<div className="add-to-cart box">
					<button className="cart-btn">Add To Cart</button>
				</div>
			</div>
		</Col>
	);
};

export default ProductDescription;
