import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Carousel from './Carousel';

const ProductMainPhoto = () => {
	const [styleDataPhoto, setStyleDataPhoto] = useState([]);
	const [stylePhotos, setStylePhotos] = useState([]);

	useEffect(async () => {
		const styleResult = await axios(
			'http://52.26.193.201:3000/products/1/styles'
		);
		setStyleDataPhoto(styleResult.data.results);
		setStylePhotos(styleResult.data.results[0].photos);
	}, []);

	console.log(stylePhotos[0]);
	return (
		<React.Fragment>
			<Col sm={3} className="vertical-carousel">
				<div className="vertical-carousel-inner">
					<Carousel stylePhotos={stylePhotos} />
				</div>
			</Col>
			<Col sm={5} className="left-col">
				{stylePhotos[0] ? (
					<img className="main-photo" src={stylePhotos[1].url} />
				) : null}
			</Col>
		</React.Fragment>
	);
};

export default ProductMainPhoto;
