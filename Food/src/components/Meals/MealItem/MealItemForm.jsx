import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
export default function MealItemForm(props) {

  const [amountIsValid , setAmountIsValid]= useState(true)
  const inbutAmountRef = useRef()
  
  function submitHandeler(event)
  {
    event.preventDefault();
    const enterdAmount = inbutAmountRef.current.value;
    const enterdAmountNum = +enterdAmount
    if (enterdAmount.trim().length === 0 || enterdAmountNum > 5 || enterdAmountNum < 1)
    {
      setAmountIsValid(false);
      return
    }
    
    props.onAddToCart(enterdAmountNum)
  }

  return (
    <>
      <form className={classes.form} onSubmit={submitHandeler}>
        <Input label="Amount"
          ref={inbutAmountRef}
          input={{ 
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue:'1'
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Enter Valid Amount</p>}
      </form>
    
    
    </>
  )
}
