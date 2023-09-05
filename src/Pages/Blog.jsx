import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import b19 from '../Assets/banner/b19.jpg'
import b1 from '../Assets/blog/b1.jpg'
import b2 from '../Assets/blog/b2.jpg'
import b3 from '../Assets/blog/b3.jpg'
import b4 from '../Assets/blog/b4.jpg'
import b6 from '../Assets/blog/b6.jpg'
import { motion } from 'framer-motion'

const Blog = () => {

  const Blog_mainImage = {
    backgroundImage: `url(${b19})`
  }

  const fontGap = {
    margin: '0 .4rem'
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
    <motion.section id ="page-header" className="blog-header" style={Blog_mainImage}>
        <motion.h2 variants={textAnime_Y}>#readmore</motion.h2>
        <motion.p variants={textAnime_Y}>Read all case study about our products</motion.p>
    </motion.section>

    <motion.section id="blog">
        <motion.div className="blog-box">
            <motion.div variants={textAnime_leftX} className="blog-img">
                <img src={b1} alt=""/>
            </motion.div>
            <motion.div className="blog-details">
                <motion.h4 variants={textAnime_rightX}>The Cotton Jersey Zip-Up Hoodie</motion.h4>
                <motion.p variants={textAnime_rightX}>Kickstarter man braid godard coloring book. Raclette waistcoat selfies are 
                    wolf chartreuse hexagon irony, godard... </motion.p>
                <motion.div variants={textAnime_rightX}><Link to="#">Continue reading</Link></motion.div>
            </motion.div>
            <h1>13/01</h1>
        </motion.div>
        <motion.div className="blog-box">
            <motion.div variants={textAnime_leftX} className="blog-img">
                <img src={b2} alt=""/>
            </motion.div>
            <motion.div className="blog-details">
                <motion.h4 variants={textAnime_rightX}>How to Style a Quiff</motion.h4>
                <motion.p variants={textAnime_rightX}>Kickstarter man braid godard coloring book. Raclette waistcoat selfies are 
                    wolf chartreuse hexagon irony, godard... </motion.p>
                <motion.div variants={textAnime_rightX}><Link to="#">Continue reading</Link></motion.div>
            </motion.div>
            <h1>29/01</h1>
        </motion.div>
        <motion.div className="blog-box">
            <motion.div variants={textAnime_leftX} className="blog-img">
                <img src={b3} alt=""/>
            </motion.div>
            <motion.div className="blog-details">
                <motion.h4 variants={textAnime_rightX}>Must Have Skater Girl Items</motion.h4>
                <motion.p variants={textAnime_rightX}>Kickstarter man braid godard coloring book. Raclette waistcoat selfies are 
                    wolf chartreuse hexagon irony, godard... </motion.p>
                <motion.div variants={textAnime_rightX}><Link to="#">Continue reading</Link></motion.div>
            </motion.div>
            <h1>08/03</h1>
        </motion.div>
        <motion.div className="blog-box">
            <motion.div variants={textAnime_leftX} className="blog-img">
                <img src={b4} alt=""/>
            </motion.div>
            <motion.div className="blog-details">
                <motion.h4 variants={textAnime_rightX}>Runway Inspired Trends</motion.h4>
                <motion.p variants={textAnime_rightX}>Kickstarter man braid godard coloring book. Raclette waistcoat selfies are 
                    wolf chartreuse hexagon irony, godard... </motion.p>
                <motion.div variants={textAnime_rightX}><Link to="#">Continue reading</Link></motion.div>
            </motion.div>
            <h1>15/04</h1>
        </motion.div>
        <motion.div className="blog-box">
            <motion.div variants={textAnime_leftX} className="blog-img">
                <img src={b6} alt=""/>
            </motion.div>
            <motion.div className="blog-details">
                <motion.h4 variants={textAnime_rightX}>AW20 Menswear Trends</motion.h4>
                <motion.p variants={textAnime_rightX}>Kickstarter man braid godard coloring book. Raclette waistcoat selfies are 
                    wolf chartreuse hexagon irony, godard... </motion.p>
                <motion.div variants={textAnime_rightX}><Link to="#">Continue reading</Link></motion.div>
            </motion.div>
            <h1>25/06</h1>
        </motion.div>
    </motion.section>

    <motion.section variants={textAnime_Y} id="pagination" className="section-p1">
        <Link style={fontGap} to="#">1</Link>
        <Link style={fontGap} to="#">2</Link>
        <Link style={fontGap} to="#"><AiOutlineArrowRight/></Link>
    </motion.section>

    <motion.section id="newsletter" className="section-p1 section-m1">
        <motion.div className="Newstext">
            <motion.h4 variants={textAnime_leftX}>Sign up for Newsletter</motion.h4>
            <motion.p variants={textAnime_leftX}>Get E-mail updates about our latest shop and <span>Special offers</span></motion.p>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>

        </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default Blog