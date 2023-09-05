import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Blog from '../Pages/Blog'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import AddProduct from '../AddProduct/AddProduct'

const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/addproduct' element={<AddProduct/>} />
   </Routes>
  )
}

export default Routers