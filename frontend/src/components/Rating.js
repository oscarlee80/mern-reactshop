import React from 'react'

const Rating = ({ value, text, color }) => {
  const stars = [1, 2, 3, 4, 5].map(index => (
    <i
      key={index}
      style={{ color }}
      className={
        value >= index
          ? 'fas fa-star'
          : value >= index - 0.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
    />
  ))

  return (
    <div className='rating' style={{ textAlign: 'center' }}>
      <span>{stars}</span>
      <span style={{ marginLeft: '7px' }}>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#fcba03'
}

export default Rating
