import React from 'react';

const CarouselPhoto = ({ photo, photoData }) => {
	console.log(photoData);
	return (
		<div className="thumbnail-box photo">
			<img className="thumbnail picture" src={photo} />
		</div>
	);
};

export default CarouselPhoto;
