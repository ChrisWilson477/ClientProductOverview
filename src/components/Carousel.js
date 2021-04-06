import React from 'react'
import CarouselPhoto from './CarouselPhoto'

const Carousel = ({ stylePhotos, photoData }) => {
  const displayPhotos = () => {
		return stylePhotos.map((photo) => {
      return <CarouselPhoto photo={photo.thumbnail_url} key={photo.url} photoData={photoData}/>;
		});
	};

	return <div className=''>{displayPhotos()}</div>;
}

export default Carousel
