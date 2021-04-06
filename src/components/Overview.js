import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = () => {
	const [styleId, setStyleId] = useState('5');
	return (
		<Row className="overview">
			<ProductMainPhoto styleId={styleId} />
			<ProductDescription styleId={styleId} />
		</Row>
	);
};

export default Overview;
