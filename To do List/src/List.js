import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, deleteItem,editItem}) => {
  return (
    <>
      <div className="grocery-list">
        {items.map((item) => {
          const { id, title } = item
          return <article className='grocery-item' key={id}> 
            <p className='title'>{title} </p>
            <div className='btm-container'>
              <button className='edit-btn' onClick={()=>editItem(id)}><FaEdit /> </button>
              <button className='delete-btn' onClick={()=>deleteItem(id)}><FaTrash /> </button>
            </div>
          </article>
        })}
      </div>
    </>
  )
}

export default List
