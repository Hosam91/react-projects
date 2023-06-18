import React from 'react';
const Categories = ({ filterCategories,myitems,category }) =>
{
  
  return <>
      <div className='btn-container'>
    {
      category.map((category,index)=>
        <button className='filter-btn' key={index}
          onClick={() => filterCategories(`${category}`)}>
          {category}
        </button>)
  
    }
        
      </div>

    
  
  </>;
};

export default Categories;
