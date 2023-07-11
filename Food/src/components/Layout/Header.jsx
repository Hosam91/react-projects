import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../imgs/meals.jpg'
import HeaderCart from './HeaderCart';

export default function Header(props)
{
    let showCart = props.onShowCart
  return (
      <>
          <div className={classes.header}>
              <h1>Order</h1>
              <HeaderCart onClick={ showCart} />
          </div>
          <div className={classes['main-image']}>
              <img src={mealsImg} alt="Food" />
          </div>
      
      </>
  )
}
