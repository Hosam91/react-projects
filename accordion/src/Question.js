import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) =>
{
  const [show, setShow] = useState(false)

  function setShowInfo(id)
  {
    setShow(true)
    console.log('true');
  }
  
  function hideInfo(id)
  {
    setShow(false)
  }
  
  return <article className='question'>
    <header>
      <h4>{title} </h4>
      {
        !show?<button  onClick={()=>setShowInfo(id)} className='btn'><AiOutlinePlus/></button>
          : <button onClick={() => hideInfo(id)} className='btn'><AiOutlineMinus/></button>

      }

    </header>
            { show&&<p>{info}</p> }

  </article>;
};

export default Question;
