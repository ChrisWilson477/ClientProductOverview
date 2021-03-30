import React, {useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';
import ProductMinPhoto from './ProductMinPhoto';
import Mock from './Mock'

import { Container, Row, Col } from 'react-bootstrap';

const Overview = () => {

  const [clothingData, setData] = useState(Mock);


	return (
		<Row className="overview">
			<ProductMainPhoto />
			<ProductDescription name={Mock.name}  />
		</Row>
	);
};

export default Overview;
