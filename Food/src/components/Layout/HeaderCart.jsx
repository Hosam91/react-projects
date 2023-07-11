import React, { useContext } from 'react'
import CartIcon from './../Cart/CartIcon';
import classes from './HeaderCart.module.css'
import { foodContext } from '../../store/Store';
 
export default function HeaderCart(props)
{
  let cartContext = useContext(foodContext)
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) =>
  { 
    return curNumber + item.amount
  },
  0
  );


  return (
      <>
          <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}> 
                <CartIcon/>
            </span>
            <span> Food</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
         </button>
    </>
  )
}
