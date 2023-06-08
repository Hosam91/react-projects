import React, { useState } from 'react';
import people from './data';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review () 
{
  const [index, setIndex] = useState(0)
  const {name,job,image,text} =reviews[index]

  
  const nextPerson = ()=>{
    setIndex(() =>
    {
      let newIndex = index + 1
      if (newIndex > reviews.length-1)
      {
        return 0
      } else
      {
        
        return newIndex
        }
    })
  }
  const prevPerson = () =>
  {
    setIndex(() =>
    {
      let newIndex = index - 1
      if (newIndex < 0)
    {
      return reviews.length-1
      }else
      {
        
        return newIndex
        }    })
    
  }
  const randomPerson = () =>
  {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === index)
    {
      randomNumber = index  + 1
      
    }

    if (randomNumber > reviews.length - 1)
    {
      randomNumber = 0;
      setIndex(randomNumber)

    } else if (randomNumber<0) {
      randomNumber = reviews.length - 1
      setIndex(randomNumber)

    } else
    {
      setIndex(randomNumber)

    }
    
    
  }
  
  return <>
    <article className='review'>
      <div className='img-container'>
      <img src={image} className='person-img'  alt={name} />
      <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
  </div>
        <button className='random-btn' onClick={randomPerson}> 
          Surprise me
        </button>
      

  </article>
  
  
  </>;
};

// export default Review;
