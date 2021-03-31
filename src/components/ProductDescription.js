import React, { setState } from 'react';
import Ratings from './Ratings';
import Mock from './Mock';

import { Row, Col } from 'react-bootstrap';
// const [quantity, setQuantity] = useState(0)

const ProductDescription = ({
	name,
	id,
	description,
	defaultPrice,
	category,
}) => {
	return (
		<Col sm={4} className="right-col">
			<h3>
				{name}
				{' -'}
				{category}
			</h3>
			<div>
				<Ratings />
				<p className="overview-price">
					{'$'}
					{Mock[1].results[0].sale_price}
					{'.00'}
					<span
						style={{
							textDecoration: 'line-through',
							paddingLeft: '20px',
							color: '#000',
						}}
					>
						{'$'}
						{defaultPrice}
						{'.00'}
					</span>
				</p>
				<p className="reduced">REDUCED PRICE!</p>
				<p className="product-description">{description}</p>
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
					<div className="color-choices">
						<img
							className="thumbnail color"
							src="https://www.colorhexa.com/4f7942.png"
						/>
						<img
							className="thumbnail color"
							src="https://www.colorhexa.com/ffa500.png"
						/>
						<img
							className="thumbnail color"
							src="https://www.colorhexa.com/cd5c5c.png"
						/>
						<img
							className="thumbnail color"
							src="https://www.colorhexa.com/1e90ff.png"
						/>
					</div>
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
