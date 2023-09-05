import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import app from '../../Assets/pay/app.jpg'
import play from '../../Assets/pay/play.jpg'
import pay from '../../Assets/pay/pay.png'
import { BiLogoYoutube, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoPinterest } from 'react-icons/bi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Footer = () => {

    const textAnime_Y= {
        offScreen:{
            y:100,
            opacity: 0
        },
        onScreen:{
            y:0,
            opacity: 1,
            transition:{
                duration: 1
            }
        }
    }

  return (
    <motion.footer 
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount:0.3}}
     className="section-p1">
    <motion.div variants={textAnime_Y} className="col">
        <img className="logo" src={logo} alt="logo" />
        <h4>Contact</h4>
        <p ><strong>Address:-</strong> Street 32, Mohali, punjab</p>
        <p ><strong>Phone:-</strong> +91-7905110615, 9696317860</p>
        <p ><strong>Hours:-</strong> 10:00 - 18:00, Mon - Sat</p>
        <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
                <BiLogoFacebook />
                <BiLogoTwitter />
                <BiLogoInstagram />
                <BiLogoPinterest />
                <BiLogoYoutube />
            </div>
        </div>
    </motion.div>

    <motion.div variants={textAnime_Y} className="col">
        <h4>About</h4>
        <Link to="/about">About us</Link>
        <Link to="/cart">Delivery Information</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms & Conditions</Link>
        <Link to="/contact">Contact us</Link>
    </motion.div>

    <motion.div variants={textAnime_Y} className="col">
        <h4>My Account</h4>
        <Link to="#">Sign In</Link>
        <Link to="cart.html">View Cart</Link>
        <Link to="cart.html">My Wishlist</Link>
        <Link to="cart.html">Track My Order </Link>
        <Link to="contact.html">Help</Link>
    </motion.div>

    <motion.div variants={textAnime_Y} className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play Store</p>
        <div className="row">
            <img src={app} alt="app" />
            <img src={play} alt="" />
        </div>
        <p>Secured payment Gateways</p>
        <img src={pay} alt="" />
    </motion.div>

    <motion.div variants={textAnime_Y} className="copyright">
        <p><AiOutlineCopyrightCircle/> 2023, Pluto - Ecommerce App</p>
    </motion.div>
</motion.footer>
  )
}

export default Footer