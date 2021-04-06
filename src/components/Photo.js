import React from 'react';


const Photo = ({ photo, description }) => {

	return (


			<img
				className="thumbnail color"
				src={photo}
        title={description}
			/>



	);
};

export default Photo;
