import React from 'react'
import PropTypes from 'prop-types'

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

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating
