import React, {useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock'

import { Container, Row, Col } from 'react-bootstrap';

const Overview = ({name}) => {

  const [clothingData, setData] = useState(Mock);


	return (
		<Row className="overview">
			{console.log(name)}
			<ProductMainPhoto />
			<ProductDescription name={Mock.name}  />
		</Row>
	);
};

export default Overview;
