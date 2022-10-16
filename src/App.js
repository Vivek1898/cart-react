import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route ,Routes } from "react-router-dom";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    console.log(item)
    setCart([...cart, item]);
    //Axios.post("Api",cart)
    // Save to db
    
    
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (

   
      <Switch>
           <Navbar setShow={setShow} size={cart.length} />
        <Routes>

       
        <Route exact path="/" element={<Amazon handleClick={handleClick} />} />
        <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart}  handleChange={handleChange}/>} />
        </Routes>
        </Switch>
      // {/* {show ? (
      //   <Amazon />
      // ) : (
      //   <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      // )} */}
  
  );
};

export default App;
