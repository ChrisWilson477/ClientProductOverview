import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Carousel from './Carousel';

const ProductMainPhoto = ({ styleId }) => {
	const [styleDataPhoto, setStyleDataPhoto] = useState([]);
	const [stylePhotos, setStylePhotos] = useState([]);
	const [styleMainPhotoId, setStyleMainPhotoId] = useState('1');

	useEffect(async () => {
		const styleResult = await axios(
			`http://52.26.193.201:3000/products/${styleId}/styles`
		);
		setStyleDataPhoto(styleResult.data);
		setStylePhotos(styleResult.data.results[0].photos);
		setStyleMainPhotoId(styleResult.data.results[0].style_id);
	}, []);


	const updatePhoto = (id) => {
		setStyleMainPhotoId(id)
	}



	return (
		<React.Fragment>
			<Col sm={3} className="vertical-carousel">
				<div className="vertical-carousel-inner">
					<Carousel stylePhotos={stylePhotos} photoData={styleDataPhoto} updatePhoto={updatePhoto} />
				</div>
			</Col>
			<Col sm={5} className="left-col" >
				{stylePhotos[0] ? (
					<img className="main-photo" src={stylePhotos[styleMainPhotoId].url} />
				) : null}
			</Col>
		</React.Fragment>
	);
};

export default ProductMainPhoto;
