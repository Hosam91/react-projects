import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext() 


 const AppProvider = ({children}) =>
{
    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const [isSubmenuOpen, setisSubmenuOpen] = useState(false)
     const [location, setLocation] = useState({})
     const [page,setPage]=useState({page:'',links:[]})


    function openSidebar()
    {
        setisSidebarOpen(true)
    }
    function closeSidebar()
    {
        setisSidebarOpen(false)
    }
    function openSubmenu(text,coordinates)
    {
          const page =sublinks.find((link)=>link.page === text)  
            setPage(page)
        setLocation(coordinates)
        setisSubmenuOpen(true)


    }
    function closeSubmenu()
    {
        setisSubmenuOpen(false)
    }
    return <AppContext.Provider value={{isSidebarOpen, setisSidebarOpen,isSubmenuOpen, setisSubmenuOpen,openSubmenu,closeSubmenu,openSidebar,closeSidebar,location ,page}}>
        {children}
        </AppContext.Provider>
}

export const useGlobalContext = () =>
{
    return useContext(AppContext)
}
export {AppProvider}