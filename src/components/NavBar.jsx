import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SearchContext from '../SearchContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
let data=createContext();
const NavBar = () => {
  const [search, setSearch] = useState("");
  let[user,setuser]=useState(null);
  useEffect(()=>{
    let retriveduser =JSON.parse(localStorage.getItem("user"))
    console.log(retriveduser);
    setuser(retriveduser);
  },[])
  let logout=()=>{
    localStorage.clear();
     window.location.reload();
  }
  return (
    <div>
      <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          {/* <Form className="d-flex" >
            <Form.Control
              type="search"   
              placeholder="Search products"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" variant="outline-success" className="ms-2">Search </Button>
          </Form> */}
        
      <div className="d-flex align-items-center me-3 gap-3">
            <Link to={"/cart"}><i className="bi bi-cart3 fs-5" style={{ cursor: "pointer" }}></i></Link>
            <Link to={"/wishlist"}><i className="bi bi-heart fs-5" style={{ cursor: "pointer" }}></i></Link>
          </div>
     {user? (<DropdownButton
            as={ButtonGroup}  
            key="success"
            variant="info"
            title="profile">
            <Dropdown.Item eventKey="1">{user.data[0].name}</Dropdown.Item>
            <Dropdown.Item eventKey="2">{user.data[0].email}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" onClick={logout}>Logout</Dropdown.Item>
          </DropdownButton>):(<>
      <Button><Nav.Link  as={Link} to="/login">Login</Nav.Link></Button>
      <Button><Nav.Link as={Link} to="/register">Register</Nav.Link></Button>
     </>)}
     </Navbar.Collapse>
      </Container>    

    </Navbar>
    {/* <data.Provider value={search}><SearchContext></SearchContext></data.Provider> */}
    </div>
   
  );
};

export default NavBar;
export {data};