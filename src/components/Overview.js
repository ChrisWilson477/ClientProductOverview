import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = ({ name }) => {
	const [clothingData, setData] = useState(Mock);

	return (
		<Row className="overview">
			<ProductMainPhoto />
			<ProductDescription />
		</Row>
	);
};

export default Overview;
