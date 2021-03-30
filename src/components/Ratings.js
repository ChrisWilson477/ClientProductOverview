import React from 'react';
import StarRatings from 'react-star-ratings';

import { Row, Col } from 'react-bootstrap';

const Ratings = () => {
	return (
		<Row>
			<Col className="rating">
				<StarRatings
					rating={4}
					starRatedColor="#e49213"
					starDimension="30px"
					starSpacing="1px"
					numberOfStars={5}
				/>
				{/* :
         <StarRatings
        rating={0}
        starRatedColor='#e49213'
        starDimension='18px'
        starSpacing='1px'
        numberOfStars={5}
        name='rating'
        /> */}
			</Col>
		</Row>
	);
};

export default Ratings;
