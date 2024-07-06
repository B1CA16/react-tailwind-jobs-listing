import React from 'react'

const Card = ({ children, bg = 'dark:bg-neutral-900 bg-gray-100' }) => {
  return (
    <div className={` ${bg} dark:text-white p-6 rounded-lg shadow-md`}>
      { children }
    </div>
  )
}

export default Card
