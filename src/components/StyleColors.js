import React from 'react';
import Photo from './Photo';

const StyleColors = ({ styleData }) => {
	const displayPhotos = () => {
		return styleData.map((style) => {
			return <Photo photo={style.photos[0].url} description={style.name} key={style.photos[0].url} />;
		});
	};

	return <div className='style-colors'>{displayPhotos()}</div>;
};

export default StyleColors;
