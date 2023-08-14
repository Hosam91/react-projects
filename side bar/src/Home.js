import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {showModalContext} from './context'

const Home = () =>
{
  const {setShowModal,setShowSidebar} = useContext(showModalContext)  

  return <>
    <main>
      <button className='sidebar-toggle' onClick={()=>setShowSidebar(true)}>
        <FaBars/>
      </button>
      <buttun className="btn" onClick={()=>setShowModal(true)} >show Modal</buttun>
  </main>
  </>
}

export default Home
