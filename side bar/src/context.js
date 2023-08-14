import React, { useState, useContext, createContext } from 'react'



export const showModalContext = createContext(0);


export default  function ShowModalContextProvider (props) 
{
    const [showModal, setShowModal] = useState(false)
    const [showSidebar,setShowSidebar]=useState(false) 



    return <showModalContext.Provider value={{showModal,setShowModal,showSidebar,setShowSidebar}}>
        {props.children}
    </showModalContext.Provider>
}
 
