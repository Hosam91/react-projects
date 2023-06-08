import React, { useEffect, useState } from 'react'
import Tour from './Tour'


const Tours = ({ tours,deleteTour }) =>
{
  
 

  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"> </div>
        </div>
      </section>
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour

        return (
          <Tour
            key={id}
            name={name}
            info={info}
            image={image}
            price={price}
            id={id}
            deleteTour={deleteTour}
            {...tour}
          />
        )
      })}
    </>
  )
}

export default Tours
