import { Link } from 'react-router-dom'
import v1 from '../Assets/about/1.mp4'
import a6 from '../Assets/about/a6.jpg'
import banner from '../Assets/about/banner.png'
import f1 from '../Assets/features/f1.png'
import f2 from '../Assets/features/f2.png'
import f3 from '../Assets/features/f3.png'
import f4 from '../Assets/features/f4.png'
import f5 from '../Assets/features/f5.png'
import f6 from '../Assets/features/f6.png'
import { motion } from 'framer-motion'


const About = () => {
  
  const about_banner = {
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
    transition={{staggerChildren: 0.6}}
    >
    <motion.section id ="page-header" className="about-header" style={about_banner}>
        <motion.h2 variants={textAnime_Y}>#knowUs</motion.h2>
        <motion.p variants={textAnime_Y}>Indias Largest Omnichannel Fashion Destination</motion.p>
    </motion.section>

    <motion.section id="about-head" className="section-p1">
        <motion.img variants={textAnime_leftX} src={a6} alt=""/>
        <motion.div variants={textAnime_rightX}>
            <h2>Who we Are?</h2>
            <p>Pluto is one of India’s foremost e-commerce company, an online fashion and lifestyle store, 
                which is headquartered in Lucknow, Uttar Pradesh. It is a huge platform for online sales and 
                is growing rapidly and shipping more than 8000 products a day to all over the country. This 
                organisation aims at providing a hassle free and comfortable shopping experience to customers 
                across the nation with the widest range of brands and products on its portal. The company sells 
                a variety of footwear, clothing, bags and backpacks, accessories, jewellery, and personal care products
                for men, women, and kids.Pluto is a user-friendly interface with huge traffic growth annually and the most 
                popular online store across India. </p>
            <abbr title="">It allows the seller to manage their store with the cataloguing support, 
                and a well-set customer supply chain management. Hence, the sellers can focus their brand in the online shopping 
                at Pluto.</abbr>

                <br/><br/>

            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%"> Pluto’s dedicated account managers will provide the 
                latest industry trends and fresh content for seller’s brand.</marquee>
        </motion.div>
    </motion.section>
    <motion.section id="about-app" className="section-p1">
        <motion.h1 variants={textAnime_Y}>Download Our <Link to="/">App</Link></motion.h1>
        <motion.div variants={textAnime_Y} className="video">
            <video autoPlay muted loop src={v1}></video>
        </motion.div>
    </motion.section>

    <motion.section id = "feature" className="section-p1">
        <motion.div variants={textAnime_leftX} className="fe-box">
            <img src={f1} alt=""/>
            <h6>Free Shipping</h6>
        </motion.div>
        <motion.div variants={textAnime_leftX} className="fe-box">
            <img src={f2} alt=""/>
            <h6>Online Order</h6>
        </motion.div>
        <motion.div variants={textAnime_leftX} className="fe-box">
            <img src={f3} alt=""/>
            <h6>Save Money</h6>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="fe-box">
            <img src={f4} alt=""/>
            <h6>Promotion</h6>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="fe-box">
            <img src={f5} alt=""/>
            <h6>Happy Sell</h6>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="fe-box">
            <img src={f6} alt=""/>
            <h6>24/7 Support</h6>
        </motion.div>
    </motion.section>

    <motion.section id="newsletter" className="section-p1 section-m1">
        <motion.div className="Newstext">
            <motion.h4 variants={textAnime_leftX}>Sign up for Newsletter</motion.h4>
            <motion.p variants={textAnime_rightX}>Get E-mail updates about our latest shop and <span>Special offers</span></motion.p>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>

        </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default About