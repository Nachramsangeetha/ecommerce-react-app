import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  let [count,setCount] = useState(0);
  useEffect(() => {
    let existed = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(existed);
  }, []);

  const removeFromCart = (product) => {
    let updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  let increament = ()=>{
    setCount(count+1);
  }
  let decrement = ()=>{
    setCount(count-1);
  }

  return (
    <div className='container'>

      <h1 className='text-center mb-4'>
        My Cart ({cart.length})
      </h1>

      {cart.length === 0 ? (
        <h3 className='text-center'>Your Cart is Empty</h3>
      ) : (

        <div className='d-flex flex-wrap gap-4 justify-content-center'>

          {cart.map((item) => (

            <Card key={item.id} style={{ width: '18rem' }}>

              <Card.Img
                variant="top"
                src={item.image}
                className='w-50 h-50 object-fit-contain d-block m-auto'
              />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  ₹ {item.price}
                </Card.Text>

                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </Button>&nbsp;
                <Button onClick={decrement} disabled={count===0}>-</Button>
                {count}
                <Button onClick={increament}>+</Button>
              </Card.Body>

            </Card>

          ))}

        </div>
      )}

    </div>
  )
}
export default Cart