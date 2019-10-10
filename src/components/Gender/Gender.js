import React from 'react'

const Gender = ({ color }) => {
  const male = ['Green', 'Red', 'Black']
  if (male.includes(color)) {
    return (
      <span role="img" aria-label="male">
        👨
      </span>
    )
  }

  return (
    <span role="img" aria-label="female">
      👩
    </span>
  )
}

export default Gender
