import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { foodContext } from '../../store/Store'
import CartItem from './CartItem'
export default function Cart(props) {
  const cartContext = useContext(foodContext)
  const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`

  const hasItems = cartContext.items.length > 0;

  const cartRemoveHandeler = (id) =>
  {
    cartContext.removeItem(id)
  }
  const cartItemAddHandeler = (item) =>
  {
    cartContext.addItem({...item,amount:1})
}
  const careItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem onRemove={cartRemoveHandeler.bind(null,item.id)}
          onAdd={cartItemAddHandeler.bind(null,item)}
          key={item.id} name={item.name}
          amount={item.amount}
          price={item.price}
        >
          {item.name} </CartItem>
      ))}
    </ul>
  )
  console.log( careItems);
  return (
    <>
      <Modal onHideCart={props.onHideCart}>
        <p> {careItems}</p>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  )
}
