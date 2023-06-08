import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getData()
  {
    try {
      setIsLoading(true)
      const respons = await fetch(`https://course-api.com/react-tours-project`)
      const result = await respons.json()
      setIsLoading(false)
      setData(result)
      console.log(result);
    } catch (error)
    {
      setIsLoading(false)

      console.log(error);
    }
  
  }


  useEffect(() => {
    getData()
    setIsLoading(false)

  }, [])
  const deleteTour = (id) =>
  {
    setData(data)
    const newTours = data.filter((tour) => tour.id !== id)
    console.log('Updated data:', newTours) 
    
    setData(newTours)
  }
  
  

  if (isLoading)
  {
    return<main>
  <Loading />
  </main>
  }
    
  if (data.length === 0)
  {
    return <main>
      <div className='title'>

        <h2>ther is no tours right now</h2>
        <button className='btn' onClick={getData}>Refresh</button>
      </div>

    </main>
    }


  return <>
    <h2>Tours Project Setup</h2>

    <main>
      <Tours tours={ data}  deleteTour={deleteTour} />

    </main>
    </>
  
}

export default App
