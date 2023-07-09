import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) =>
{
  const [alert,setAlert]=useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)

  useEffect(() =>
  {
    const removeTextCopied = setTimeout(() => {
      setAlert(false)
    }, 1500);
    return ()=>clearTimeout(removeTextCopied)
  },[alert])

  const copyText = () =>
  {
    setAlert(true)
    navigator.clipboard.writeText(hex)
    console.log(hex);
}   
  
  return <>
  
    <article className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyText}
    >
    <p className='percent-value'>{weight}% </p>
      <p className='color-value'> rgb :{bcg} </p>
      <p className='color-value'> hex value :{hex} </p>
      <p>{alert&&'Hex copied to clipboard' }</p>
      
  </article>
  </>
}

export default SingleColor
