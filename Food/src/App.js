import Header from './components/Layout/Header';
import  React, { useState }  from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import FoodContextProvider from './store/Store';
function App()
{

  const [cartIsShown,setCartIsShown] =useState(false)

  function showCartHandler()
  {
    setCartIsShown(true);

  }
  function hideCartHandler()
  {
    setCartIsShown(false);
    
  }

  return (
    <FoodContextProvider>
      {cartIsShown && <Cart  onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler }  /> 
      <main>
         <Meals />
        </main>
    </FoodContextProvider>
  );
}

export default App;
