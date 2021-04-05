import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';


import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = ({
	name,
	slogan,
	id,
	description,
	defaultPrice,
	category,
}) => {


	return (
		<Row className="overview">
			<ProductMainPhoto slogan={slogan} />
			<ProductDescription
				name={name}
				id={id}
				category={category}
				defaultPrice={defaultPrice}
				description={description}
			/>

		</Row>
	);
};

export default Overview;
