import React from 'react'
import PropTypes from 'prop-types'

const Gender = ({ color }) => {
  const male = ['Green', 'Red', 'Black']
  if (male.includes(color)) {
    return (
      <span role="img" aria-label="male" data-testid="male">
        👨
      </span>
    )
  }

  return (
    <span role="img" aria-label="female" data-testid="female">
      👩
    </span>
  )
}

Gender.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Gender
