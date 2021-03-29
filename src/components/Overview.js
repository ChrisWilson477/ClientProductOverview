import React from 'react'
import ProductMainPhoto from './ProductMainPhoto';
import ProductDescription from './ProductDescription';
import ProductMinPhoto from './ProductMinPhoto';

import { Container, Row, Col } from 'react-bootstrap'


const Overview = () => {
  return (

    <Row className='overview'>
      <ProductMainPhoto />
     <ProductDescription />
    </Row>

  )
}

export default Overview
