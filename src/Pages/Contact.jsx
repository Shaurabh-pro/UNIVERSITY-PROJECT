import banner from '../Assets/about/banner.png'
import contactImage from '../Assets/contactImage.png'
import { motion } from 'framer-motion'

const Contact = () => {

  const about_banner = {
    background: `url(${banner})`
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
        <motion.h2 variants={textAnime_Y}>#lets_talk</motion.h2>
        <motion.p variants={textAnime_Y}>LEAVE A MESSAGE. We love to hear from you!</motion.p>
    </motion.section>

    <motion.section id="contact-details" className="section-p1">
        <motion.div variants={textAnime_leftX} className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa fa-map"></i>
                    <p>Street 32, Mohali, Punjab</p>
                </li>
                <li>
                    <i className="fa fa-envelope"></i>
                    <p>contact@pluto.com</p>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <p>+91-7905110615, 9696317860</p>
                </li>
                <li>
                    <i className="fa fa-clock"></i>
                    <p>10:00 - 18:00, Mon - Sat</p>
                </li>
            </div>
        </motion.div>

        <motion.div variants={textAnime_rightX} className="map">
           <img src={contactImage} alt="" />
        </motion.div>
    </motion.section>

    <motion.section id="form-details">
        <motion.form action="">
            <motion.span variants={textAnime_Y}>LEAVE A MESSAGE</motion.span>
            <motion.h2 variants={textAnime_Y}>We love to hear from you!</motion.h2>
            <motion.input variants={textAnime_Y} type="text" placeholder="Your Name"/>
            <motion.input variants={textAnime_Y} type="text" placeholder="E-mail"/>
            <motion.input variants={textAnime_Y} type="text" placeholder="Subject"/>
            <motion.textarea variants={textAnime_Y} name="" id="" cols="30" rows="10" placeholder="Your Message"></motion.textarea>
            <motion.button variants={textAnime_Y} className="normal">Submit</motion.button>
        </motion.form>
        {/* <div className="people">
            <div>
                <img src="img/people/1.jpg" alt=""/>
                <p><span>Harshit Shukla</span> Senior Marketing Manager <br/> Phone: +91-7905110615
                <br/>E-mail: imharshitshukla@pluto.com</p>
            </div>
            <div>
                <img src="img/people/2.jpeg" alt=""/>
                <p><span>Vaibhav Pathak</span> Product Specialist <br/> Phone: +91-9696317860
                <br/>E-mail: vaibpathak@pluto.com</p>
            </div>
            <div>
                <img src="img/people/3.jpeg" alt=""/>
                <p><span>Mohd. Afzal</span> Quality Assurance Manager <br/> Phone: +91-8354973975
                <br/>E-mail: mdafzal@pluto.com</p>
            </div>
        </div> */}
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

export default Contact