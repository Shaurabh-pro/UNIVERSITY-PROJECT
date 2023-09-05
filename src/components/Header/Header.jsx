import { NavLink } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'


const Header = () => {

  const [isBar, setisBar] = useState(true)

  const toggleIcon =()=>{
    setisBar(!isBar)
  }

  const BarSize ={
    fontSize: '1.6rem'
  }


  // Animation functions
  const imageAnimate = {
    offScreen:{
      y: -100,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1
    }
}

  return (
    <motion.section id ="header"
    initial='offScreen'
    animate='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren:0.4}}
    >
    <motion.div
    variants={imageAnimate}
    ><NavLink className="logo" to="/"><img src={logo}  alt="logo"/></NavLink></motion.div>
    <motion.div
    variants={imageAnimate}
    >
        <ul  className='navbar' id={isBar? "navHidden": "navVisible"} onClick={toggleIcon}  >
            <li> <NavLink className="active" to='/'>Home</NavLink></li>
            <li> <NavLink to="/shop">Shop</NavLink></li>
            <li> <NavLink to="/blog">Blog</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
            <li id="lg-bag"> <NavLink to='/cart'><BsCart4 style={BarSize}/></NavLink></li>
            {/* <NavLink href="#" id="close"><i className="fa-solid fa-xmark"></i></NavLink> */}
        </ul>
    </motion.div>
    <motion.div id="mobile" onClick={toggleIcon}
    variants={imageAnimate}>
        {isBar ? <FaBars className='menuBar'/> : <AiOutlineClose className='menuBar'/>}
    </motion.div>

</motion.section>
  )
}

export default Header