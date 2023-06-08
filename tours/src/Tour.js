import React, { useState } from 'react';

const Tour = ({ name, price, info, id, image, deleteTour}) =>
{
  const [readMore, setReadMore] = useState(true)
  

  
  return <>
  
  <article className="single-tour" >
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> { !readMore?info:` ..${info.substring(0,200)}.....` }</p>
        <button onClick={()=>setReadMore(!readMore)}>{readMore?'Read more':'Show less' }</button>
              
              <button className='delete-btn' onClick={()=>deleteTour(id)} >Not interestd</button>
            </footer>
          </article>
  
  
  
  </>;
};

export default Tour;
