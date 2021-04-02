import React, { useState, useEffect } from 'react';
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';

import Mock from './Mock';

import { Container, Row, Col } from 'react-bootstrap';

const Overview = ({
	// name,
	// slogan,
	// id,
	// description,
	// defaultPrice,
	// category,
	// salePrice,
	// skus,
	// photos,
	// styleName,
	productData,
	styleData
}) => {

	const [product, setProduct] = useState(productData)
	const [style, setStyle] = useState(styleData)

	return (
		<Row className="overview">
			<ProductMainPhoto slogan={productData.slogan} photos={styleData.photos} />
			<ProductDescription
				name={productData.name}
				id={productData.id}
				category={productData.category}
				defaultPrice={productData.default_price}
				description={productData.description}
				salePrice={styleData.sale_price}
				skus={styleData.skus}
				photos={styleData.photos}
				styleName={styleData.name}
			/>
		</Row>
	);
};

export default Overview;
