import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

import logo from './logo.svg'

const Navbar = () => {

  const [tabs, setTabs] = useState(links)
  const [icons, setIcons] = useState(social)
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)
  const linksContainerRef = useRef(null)

  useEffect(() =>
  {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks)
    {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else
    {
      linksContainerRef.current.style.height = '0px'
    }

  },[showLinks])
  

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      
        <div className='links-container' ref={linksContainerRef}> 
        <ul className='links' ref={linksRef}>
          {
            tabs.map((tab) =>
            {return<li key={tab.id}><a href={tab.url} >{tab.text} </a></li>
            })
          }
        
          
        </ul>
        

      </div>
      
     
      <ul className="social-icons">
      {
            icons.map((icon) =>
            {return<li key={icon.id}><a  href={icon.url}>{icon.icon}</a></li>
            })
          }
        </ul>
    </div>
  </nav>

}

export default Navbar
