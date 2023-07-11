import { createContext, useReducer } from 'react'

export let foodContext = createContext(0)

const defultCartState = {
  items: [],
  totalAmount: 0,
}

function cartReduser(state, action) {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    )
    const existingItem = state.items[existingItemIndex]
    let updatedItems
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
    if (action.type === 'REMOVE')
    {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id,
            )
            const existingItem =state.items[existingItemIndex]
            
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems
        if (existingItem.amount === 1)
        {
            updatedItems =state.items.filter((item) =>item.id !== action.id )
        } else
        {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    
    }
  return defultCartState
}

export default function FoodContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReduser,
    defultCartState,
  )

  function addItemToCart(item) {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  function removeItemFromCart(id) {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  }

  return (
    <foodContext.Provider value={cartContext}>
      {props.children}
    </foodContext.Provider>
  )
}
