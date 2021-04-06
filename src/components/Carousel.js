import React from 'react'
import CarouselPhoto from './CarouselPhoto'

const Carousel = ({ stylePhotos }) => {
  const displayPhotos = () => {
		return stylePhotos.map((photo) => {
      return <CarouselPhoto photo={photo.url} key={photo.url} />;
		});
	};

	return <div className=''>{displayPhotos()}</div>;
}

export default Carousel
