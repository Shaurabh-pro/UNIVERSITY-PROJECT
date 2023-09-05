import f1 from '../Assets/products/f1.jpg'
import f2 from '../Assets/products/f2.jpg'
import f3 from '../Assets/products/f3.jpg'
import banner from '../Assets/about/banner.png'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cart = () => {

  const cart_banner ={
    backgroundImage: `url(${banner})`
  }

  // animation
const textAnime_Y = {
    offScreen:{
        y: -100,
        opacity: 0
    },
    onScreen:{
        y: 0,
        opacity :1
    }
}

const textAnime_leftX = {
    offScreen:{
        x: -100,
        opacity: 0
    },
    onScreen:{
        x: 0,
        opacity :1
    }
}
const textAnime_rightX = {
    offScreen:{
        x: 200,
        opacity: 0
    },
    onScreen:{
        x: 0,
        opacity :1
    }
}

  return (
    <motion.div
    initial='offScreen'
    animate='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
    >
    <motion.section id ="page-header" className="about-header" style={cart_banner}>
        <motion.h2 variants={textAnime_Y}>#cart</motion.h2>
        <motion.p variants={textAnime_Y}>Add your coupon code & SAVE upto 70%!</motion.p>
    </motion.section>

    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to="/shop"><MdRemoveShoppingCart/></Link></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>&#8377 899</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377 899</td>
                </tr>
                <tr>
                    <td><Link to="/shop"><MdRemoveShoppingCart/></Link></td>
                    <td><img src={f2} alt=""/></td>
                    <td>Floral T-Shirts</td>
                    <td>&#8377 899</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377 899</td>
                </tr>
                <tr>
                    <td><Link to="/shop"><MdRemoveShoppingCart/></Link></td>
                    <td><img src={f3} alt=""/></td>
                    <td>Floral T-Shirts</td>
                    <td>&#8377 899</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377 899</td>
                </tr>
            </tbody>
        </table>
    </section>

    <motion.section id="cart-add" className="section-p1">
        <motion.div variants={textAnime_leftX} id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon"/>
                <button className="normal">Apply</button>
            </div>
        </motion.div>
        <motion.div variants={textAnime_rightX} id="subtotal">
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>&#8377 2697</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td>&#8377 2697</td>
                </tr>
            </table>
            <button className="normal">Proceed to Checkout</button>
        </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default Cart