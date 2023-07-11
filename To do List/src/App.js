import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>
{
  let list = localStorage.getItem('list')
  if (list)
  {
    return JSON.parse(localStorage.getItem('list'))
  }
  else
  {
    return []
  }
}


function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  useEffect(() => {
    // console.log(list);
  }, [list])

  function handleSubmit(e) {
    e.preventDefault()

    if (!task) {
      //display alert
      showAlert(true, 'Please enter valid Task !', 'danger ')
    } else if (task && isEditing) {
      //deal with Edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: task }
          }
          return item
        }),
      )
      setTask('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true,'task changed','success')
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: task }
      setList([...list, newItem])
      setTask('')
      showAlert(true, 'Important Task is added !', 'success')
    }
  }
  const showAlert = (show = false, msg, type) => {
    setAlert({ show, msg, type })
  }
  const clearList = () => {
    showAlert(true, 'Your List is Empty', 'danger')
    setList([])
  }
  const handleDelete = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId)
    showAlert(true, 'task is Deleted ', 'danger')
    setList(updatedList)
  }
  const editItem = (itemId) => {
    const myItem = list.find((item) => item.id === itemId)
    setIsEditing(true)
    setEditId(itemId)
    setTask(myItem.title)
  }
  useEffect(() =>
  {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return (
    <>
      <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          {alert.show && (
            <Alert {...alert} list={list} removeAlert={showAlert} />
          )}
          <h3>To Do List</h3>

          <div className="form-control">
            <input
              className="grocery"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder=" ..."
            />
            <button type="submit" className="submit-btn">
              {' '}
              {isEditing ? 'Edit' : 'Add'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} deleteItem={handleDelete} editItem={editItem} />
            <button className="clear-btn" onClick={() => clearList()}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default App
