import React from 'react'

const Card = ({image,name,price}) => {
  return (
    <div className='Card'>
        <img src={image} alt="image" />
        <h1>{name}</h1>
        <p>£ {price}</p>
    </div>
  )
}

export default Card