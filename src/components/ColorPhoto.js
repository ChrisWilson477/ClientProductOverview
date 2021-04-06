import React from 'react';

const ColorPhoto = ({ photo, description }) => {
	return <img className="thumbnail color" src={photo} title={description} />;
};

export default ColorPhoto;
