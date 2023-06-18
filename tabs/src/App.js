import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Job from './Job'





// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])
  const [valu, setValu] = useState(0)    

  const [loading, setLoading] = useState(true)
  
  async function getTabs()
  {
    try
    {
      setLoading(true)
      const response = await fetch(url)
      const result = await response.json()
      setJobs(result)
      setLoading(false)
      console.log(jobs)
      
    } catch (error)
    {
      console.log(error);
    }
   
  }

  useEffect(() => {
    getTabs()
  }, [])









  if (loading)
  {
    return <section className="section loading">
    <h1>Loading...</h1>
  </section>
  }
  
  // console.log("app",jobs[valu]);


  console.log(jobs[valu]);
  const { company, dates, duties, title } = jobs[valu]


  return<>
  <section className="section">
  <div className="title">
    <h2>experience</h2>
    <div className="underline"></div>
  </div>
  <div className="jobs-center">
    {/* btn container */}
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValu(index)}
            className={`job-btn ${index === valu && 'active-btn'}`}
          >
            {item.company}
          </button>
        )
      })}
    </div>
    {/* job info */}
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </article>
  </div>
  <button type="button" className="btn">
    more info
  </button>
</section>
</>
}

export default App
