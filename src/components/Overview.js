import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = (
// 	{
// 	name,
// 	slogan,
// 	id,
// 	description,
// 	defaultPrice,
// 	category,
// 	styleData
// }
) => {
	return (
		<Row className="overview">
			<ProductMainPhoto
			// slogan={slogan} styleData={styleData}
			/>
			<ProductDescription
				// name={name}
				// id={id}
				// category={category}
				// defaultPrice={defaultPrice}
				// description={description}
				// styleData={styleData}
			/>
		</Row>
	);
};

export default Overview;
