import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [myitems, setMyItems] = useState(items)
  
  const allCategories = items.map((item) => item.category)
  
  const ourCategories =['all',...new Set(allCategories)] 
  
  const [category, setCategory] = useState(ourCategories)

  function filterCategories(category)
  {
    if (category === 'all')
    {
      setMyItems(items)
      return
    }
    const chosenCategory = items.filter((item) => item.category === category)

    setMyItems(chosenCategory)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories filterCategories={filterCategories} myitems={myitems} category={ category} />
        <Menu items={myitems} />
      </section>
    </main>
  )
}

export default App
