import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import Slide from './Slide.jsx'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(2)


 
  
  

  useEffect(() =>
  {
    const lastIndex = people.length -1
    if (index<0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex)
  {
    setIndex(0)
  }
  
  }, [index, people])
  
  useEffect(() =>
  {
   let slider = setInterval(() =>
    {
      setIndex(index+1)
   }, 3000)
    return ()=> clearInterval(slider)
    
  },[index])


  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Reviews</h2>
        </div>
        <div className="section-center">
          <Slide data={people} index={index} />

          <button className="prev" onClick={()=>setIndex(index - 1)} >
            <FiChevronLeft />
          </button>
          <button className="next" onClick={()=>setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  )
}

export default App
