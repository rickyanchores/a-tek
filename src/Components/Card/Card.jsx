import React from 'react'

const Card = ({image,name,price}) => {
  return (
    <div className='Card'>
        <img src={image} alt="image" />
        <div className="container">
          <h1>{name}</h1>
          <p>£ {price}</p>
        </div>
    </div>
  )
}

export default Card