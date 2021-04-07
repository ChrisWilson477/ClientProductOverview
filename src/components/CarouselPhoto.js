import React from 'react';

const CarouselPhoto = ({ photo, photoData, updatePhoto, id }) => {
	return (
		<div className="thumbnail-box photo">
			<img className="thumbnail picture" src={photo} onClick={(e)=> updatePhoto(id, e)} />
		</div>
	);
};

export default CarouselPhoto;
