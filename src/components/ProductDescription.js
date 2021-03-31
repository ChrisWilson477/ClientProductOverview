import React, { setState} from 'react';
import Ratings from './Ratings';
import Mock from './Mock'

import { Row, Col } from 'react-bootstrap';
// const [quantity, setQuantity] = useState(0)

const ProductDescription = () => {
	return (
		<Col sm={4} className='right-col'>
      <h3>{Mock[0].name}{' -'}{Mock[0].category}</h3>
      <Ratings />
      <p className='overview-price'><span style={{textDecoration: 'line-through', paddingRight: '20px' }}>{'$'}{Mock[0].default_price}{'.00'}</span>{'$'}{Mock[1].results[0].sale_price}{'.00'}</p>
      <p>{Mock[0].description}</p>

      <button type='button' className='button'>-</button>
      <input type='text' className='quantity-input' ></input>
      <button type='button' className='button'>+</button>
		</Col>
	);
};

export default ProductDescription;
