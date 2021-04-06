import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

import Photo from './Photo'
import Mock from './Mock';

const ProductMainPhoto = () => {


	return (
		<>

			<Col sm={3} className="vertical-carousel">
				<div className="vertical-carousel-inner">


			{/* {!isLoading
			   ?	styles.results.map((style) => {
           console.console.log(style);
				})
			    : <p> Loading...</p>
			} */}

					{/* <div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[1].url}
						/>
					</div>
					<div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[2].url}
						/>
					</div>
					<div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[3].url}
						/>
					</div>
					<div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[4].url}
						/>
					</div>
					<div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[5].url}
						/>
					</div>
					<div className="thumbnail-box photo">
						<img
							className="thumbnail picture"
							src={Mock[1].results[0].photos[0].url}
						/>
					</div> */}
				</div>
			</Col>
			<Col sm={5} className="left-col">
				<img className="main-photo" src={Mock[1].results[0].photos[1].url} />
			</Col>
		</>
	);
};

export default ProductMainPhoto;
