import React, { useState } from 'react'
export default function Job({  index ,valu,setValu,jobs})
{
    
    const {company, dates, duties, title } = jobs[valu]

    console.log("job",valu);
    


  return ( <>
      
          <div className="btn-container">
              <button className={`job-btn   ${index === valu && 'active-btn'} ` }
                  onClick={() => setValu(index)}>
                  {company}
              </button> 

      </div>
      
          <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          </article>
      
      </>
  )
}
