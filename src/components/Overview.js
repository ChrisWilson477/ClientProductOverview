import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = () => {
	const [productId, setProductId] = useState('1');

	return (
		<Row className="overview">
			<ProductMainPhoto productId={productId} />
			<ProductDescription productId={productId} />
		</Row>
	);
};

export default Overview;
