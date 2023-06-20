import React, { useState } from 'react';
import data from './data';
function App()
{
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // function getTexts(count,data)
  // {
  //   let lorems = []
  
  // for (let i = 0;i < count;i++)
  // {
  //   if (i < data.length)
  //   {
  //     lorems.push(data[i])
  //     setText(lorems)
  //     }
  //   }
  //   // console.log(lorems);
  //   console.log('ana texts',text);
  //   return lorems
  
  // }
  
  
  
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    // getTexts(count, data)
    let amount = parseInt(count)
    if (amount > 8)
    {
      amount = 8
    }
    if (amount <= 1)
    {
      amount = 1
    }
    
    setText(data.slice(0, amount))
    
  }
  
  return (
    <>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>
            paragraphs:
          </label>
          <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
          <button className='btn' type='submit'>generate</button>
        </form>
        <article className='lorem-text'> 
          {
            text.map((item,index) =>
            {return <p key={index}>{ item} /</p>
            })
          }
         
        </article>

      </section>
    
    
    </>
    )
}

export default App;
