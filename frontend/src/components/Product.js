import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ minHeight: '30vh' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body style={{ fontSize: '15px' }}>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' style={{ minHeight: '5vh' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' style={{ fontSize: '12px' }}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' style={{ textAlign: 'center', marginTop: '10px' }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
