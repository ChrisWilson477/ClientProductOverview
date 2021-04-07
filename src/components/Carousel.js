import React from 'react';
import CarouselPhoto from './CarouselPhoto';

const Carousel = ({ stylePhotos, photoData, updatePhoto }) => {
	const displayPhotos = () => {
		return stylePhotos.map((photo, index) => {
			return (
				<CarouselPhoto
					photo={photo.thumbnail_url}
					key={photo.url}
					photoData={photoData}
					updatePhoto={updatePhoto}
					id={index}
				/>
			);
		});
	};

	return <div className="">{displayPhotos()}</div>;
};

export default Carousel;
