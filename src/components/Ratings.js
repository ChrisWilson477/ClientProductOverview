import React from 'react';
import StarRatings from 'react-star-ratings';

import { Row, Col } from 'react-bootstrap';

const Ratings = () => {
	return (
		<Row>
			<Col sm={5} className="rating">

				<StarRatings
					rating={4}
					starRatedColor="#e49213"
					starDimension="24px"
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
			<Col sm={3} className='rating-review'><p><a href='#'>4.2</a> | <a href='#'>(10)</a></p></Col>
			<Col sm={4} className='rating-item'> Item #116354 </Col>
		</Row>
	);
};

export default Ratings;
