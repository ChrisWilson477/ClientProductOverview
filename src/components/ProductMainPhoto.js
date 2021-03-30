import React from 'react';
import ProductMinPhoto from './ProductMinPhoto';

import { Row, Col, Carousel } from 'react-bootstrap';
import MockImg from '../images/clothes_rack.jpg';
import Mock from './Mock'

const ProductMainPhoto = () => {
	return (
		<Col sm={7} className='left-col'>
    <img className='main-photo' src={Mock[1].results[0].photos[0].url} />
    <ProductMinPhoto />
		</Col>
	);
};

export default ProductMainPhoto;
