import React from 'react'

export const Button = ({text, onEventClick}) => {
  return (
    <button onClick={onEventClick}>{text}</button>
  )
}
