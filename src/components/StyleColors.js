import React from 'react';
import ColorPhoto from './ColorPhoto';

const StyleColors = ({ styleData }) => {
	const displayPhotos = () => {
		return styleData.map((style) => {
			return <ColorPhoto photo={style.photos[0].thumbnail_url} description={style.name} key={style.photos[0].url} />;
		});
	};

	return <div className='style-colors'>{displayPhotos()}</div>;
};

export default StyleColors;
