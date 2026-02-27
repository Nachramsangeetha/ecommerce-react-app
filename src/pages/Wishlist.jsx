import React, { useEffect, useState } from 'react'
import EmptyWishlist from "../assets/Noproductfound.avif"
import { Button, Card, Form } from 'react-bootstrap';

const Wishlist = () => {
  let [wishlist,setWishlist] = useState([]);
  
  useEffect(()=>{
    let existed = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    console.log(existed);
    setWishlist(existed);
  },[]);
  const toggleWishlist = (product)=>{
      let alreadyExisted = wishlist.filter(item=>item.id !== product.id);
      setWishlist(alreadyExisted);
      localStorage.setItem("wishlistItems", JSON.stringify(alreadyExisted));
    }
  return (
    <div>
      {wishlist.length === 0 ? (
        <img src={EmptyWishlist} alt="EmptyWishlist" />
      ):(
       <div>
         <h1 className='text-center mb-4'>Welcome to Wishlist ({wishlist.length})</h1>
        {wishlist.map(product=>(
          <div key={product.id}>
            <Card key={product.id} style={{ width: '18rem', position: "relative" }} >
              <i className="bi bi-heart-fill text-danger" onClick={()=>{toggleWishlist(product)}} style={{position: "absolute", top: "10px", right: "40px", fontSize: "20px", cursor: "pointer"}}></i>
              {/* <i className="bi bi-cart3" style={{ position: "absolute", top: "10px", right: "10px", fontSize: "20px", cursor: "pointer"}}></i> */}
              <Card.Img variant="top" src={product.image} className='w-50 h-50 object-fit-contain d-block m-auto'/>
              <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description.slice(0, 100)}</Card.Text>
                  <Button variant="primary" onClick={()=>navigate("/details",{state:product})} >View More</Button>
              </Card.Body>
          </Card>
          </div>
        ))}
       </div>
      )}
    </div>
  )
}

export default Wishlist