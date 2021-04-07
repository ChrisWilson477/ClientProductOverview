import React from 'react';

const CarouselPhoto = ({ photo, photoData, updatePhoto, id }) => {
	console.log(id);
	return (
		<div className="thumbnail-box photo">
			<img className="thumbnail picture" src={photo} onClick={(e)=> updatePhoto(id, e)} />
		</div>
	);
};

export default CarouselPhoto;
