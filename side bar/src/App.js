import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import  ShowModalContextProvider from './context'
function App() {
  return (
    <>
      <ShowModalContextProvider>
      <Home />
      <Modal/>
      <Sidebar/>

      </ShowModalContextProvider>
      
    </>
  )
}

export default App
