import React, { useContext } from 'react'
import {showModalContext} from './context'

import { FaTimes } from 'react-icons/fa'
const Modal = () =>
{
  const {showModal,setShowModal} = useContext(showModalContext) 
  
  return <>
    <div className={`${showModal?'modal-overlay show-modal':'modal-overlay'}  `}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={()=>setShowModal(false)} > <FaTimes/></button>
      </div>
  </div>
  
  </>
}

export default Modal
