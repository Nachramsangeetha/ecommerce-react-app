import React from 'react'
import { useLocation } from 'react-router-dom'

const Products = () => {
    let location =useLocation();
  return (
    <div>
       <h1>{location.state.title}</h1>
       <img src={location.state.image} style={{width:"150px",height:"150px"}} ></img>
       <p>price:{location.state.price}</p>
       <p>{location.state.description}</p>
    </div>
  )
}

export default Products