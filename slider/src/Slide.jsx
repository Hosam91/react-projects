import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
export default function Slide({ data, index })
{

console.log('index',index);
        

    
    return (<>
        {
            data.map((person, PersonIndex) =>
            {
                const {id, image, name, quote, title} = person
                let position='nextSlide';
                if(PersonIndex===index)
                {
                    position ='activeSlide'
                        }
                
             return  <article key={id} className={position} >
                <img src={image} alt="" className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text"> {quote}</p>

                <FaQuoteRight className="icon" />

        </article>}
            )
        }
  
      
        
        </>
      
      
 ) }