import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { showModalContext } from './context'


const Sidebar = () =>
{
  
  const {showSidebar,setShowSidebar}= useContext(showModalContext) 
  // const x = useContext(showModalContext) 
  // console.log(x.showSidebar);
  return <>
    <aside className={`${showSidebar?"aside sidebar show-sidebar":"aside sidebar "} `}>
      <div className="sidebar-header">
        <img src={logo} className='logo' alt="coding addict" />
        <button className="close-btn" onClick={()=>setShowSidebar(false)} ><FaTimes/></button>
      </div>
      <ul className="links">
        {links.map((link) =>
        {
          const { id, url, text, icon } = link;
          return <li key={id}><a href={url}>{icon} { text}</a></li>
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) =>
        {
          const { id, url, icon } = link;
          return <li key={id}>
            <a href={url}>{ icon}</a>
          </li>
        })}
      </ul>
    </aside>

  </ >
}

export default Sidebar
