import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register';
import Wishlist from './pages/WishList';
import Cart from './pages/Cart'
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <>
         {/* <Button variant="danger">Danger</Button>
        <Button variant="outline-success">Success</Button>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/35528435/pexels-photo-35528435.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  */}
    { <BrowserRouter>
   
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
         <Route path="/" element={<Banner/>}></Route>
          <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
           <Route path='/details' element={<Products></Products>}> </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>

      </Route>
    
      <Route path="/about" element={<About/>}></Route>
       <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register/>}/>
       
    </Routes>
    </BrowserRouter> }
    {/* <Login/>
    <Register/> */}
    </>
  )
}

export default App
