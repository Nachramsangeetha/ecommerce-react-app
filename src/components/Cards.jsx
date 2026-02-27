import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardsShimmerEffect from './CardsShimmerEffect';
import 'bootstrap-icons/font/bootstrap-icons.css';
import productNotFoundCategory from "../assets/NotFound.avif";
import { Link } from 'react-router-dom';

const Cards = () => {
    let [products,setProducts] = useState([]);
    let [search,setSearch] = useState("");
    let [category,setCategory] = useState("");
    let navigate=useNavigate();
    const [wish,setWish] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")  
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err));
        const storedItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        setWish(storedItems);
    },[])
    // for wishlist
    const toggleWishlist = (product)=>{
      console.log(product);
      let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
      let alreadyExisted = wishlistItems.find(item=>item.id === product.id);
      if(alreadyExisted){
        //remove
        wishlistItems=wishlistItems.filter(item=>item.id !== product.id);
      }
      else{
        //add
        wishlistItems.push(product);
      }
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      setWish(wishlistItems);
    }
    // for cart
    const toggleCart = (product) => {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      let alreadyExisted = cart.find(item => item.id === product.id);
      if (alreadyExisted) {
        // Remove from cart
        cartItems = cartItems.filter(item => item.id !== product.id);
      } else {
        // Add to cart
        cartItems.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCart(cartItems);
    };

    // let filteredProducts= products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()));
    let filteredCategory = [...new Set(products.map(product => product.category))];
    console.log(filteredCategory);
    let filteredProducts = products.filter(product => {
    let searchValue = product.title.toLowerCase().includes(search.toLowerCase());
    let categoryFilter = category === "" || product.category === category;
    return searchValue && categoryFilter;
    })
    let content;
    if(products.length === 0){
      content = <CardsShimmerEffect></CardsShimmerEffect>
    }
    else if(search !== "" && filteredProducts.length === 0){
      content = <img src={productNotFoundCategory} alt="ProductNotFound" className='w-25 h-25 m-auto'/>
    }
    else{
      content = <div className='d-flex flex-wrap gap-5 justifu-content-center m-5 p-0 '>
        {filteredProducts.map(product=>{
          const alreadyExisted = wish.find(item=>item.id === product.id);
        return(
          <Card key={product.id} style={{ width: '18rem', position: "relative" }} >
              <i className={`bi ${alreadyExisted ? " bi-heart-fill text-danger":"bi-heart"}`} onClick={()=>{toggleWishlist(product)}} style={{position: "absolute", top: "10px", right: "40px", fontSize: "20px", cursor: "pointer"}}></i>
              {/* <i className="bi bi-cart3" style={{ position: "absolute", top: "10px", right: "10px", fontSize: "20px", cursor: "pointer"}}></i> */}
              <Card.Img variant="top" src={product.image} className='w-50 h-50 object-fit-contain d-block m-auto'/>
              <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description.slice(0, 100)}</Card.Text>
                  <Button variant="primary" onClick={()=>navigate("/details",{state:product})} >View More</Button>&nbsp;&nbsp;
                  <Button variant="primary" onClick={()=>toggleCart(product)} >{cart.find(item=>item.id === product.id)? "Remove":"Add to cart"}</Button>
              </Card.Body>
          </Card>
        );
    })}
    </div>
    }
  return (
    <div className='d-flex flex-wrap gap-5 justifu-content-center m-5 p-0 '>
      <Form className="search-bar">
          <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" >All Categores</option>
              {filteredCategory.map((product,index)=>(<option key={index} value={product} >{product}</option>))}
          </select>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={e=>setSearch(e.target.value)}
          />&nbsp;
          <Button variant="outline-success">Search</Button>&nbsp; 
          </Form>
          {content} 
    </div>
  )
}

export default Cards;