import React from 'react'

function ServicesItem({ image, name, des }) {
  return (
    <div className='servicesItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{des}</p>
    </div>
  )
}

export default ServicesItem