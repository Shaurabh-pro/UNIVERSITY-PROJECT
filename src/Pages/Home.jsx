import { Link } from 'react-router-dom'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import hero4 from '../Assets/hero4.png'
import button from '../Assets/button.png'
import f1 from '../Assets/features/f1.png'
import f2 from '../Assets/features/f2.png'
import f3 from '../Assets/features/f3.png'
import f4 from '../Assets/features/f4.png'
import f5 from '../Assets/features/f5.png'
import f6 from '../Assets/features/f6.png'
import f_1 from '../Assets/products/f1.jpg'
import f_2 from '../Assets/products/f2.jpg'
import f_3 from '../Assets/products/f3.jpg'
import f_4 from '../Assets/products/f4.jpg'
import f_5 from '../Assets/products/f5.jpg'
import f_6 from '../Assets/products/f6.jpg'
import f_7 from '../Assets/products/f7.jpg'
import f_8 from '../Assets/products/f8.jpg'
import b2 from '../Assets/banner/b2.jpg'
import n1 from '../Assets/products/n1.jpg'
import n2 from '../Assets/products/n2.jpg'
import n3 from '../Assets/products/n3.jpg'
import n4 from '../Assets/products/n4.jpg'
import n5 from '../Assets/products/n5.jpg'
import n6 from '../Assets/products/n6.jpg'
import n7 from '../Assets/products/n7.jpg'
import n8 from '../Assets/products/n8.jpg'
import b17 from '../Assets/banner/b17.jpg'
import b10 from '../Assets/banner/b10.jpg'
import b4 from '../Assets/banner/b4.jpg'
import b7 from '../Assets/banner/b7.jpg'
import b18 from '../Assets/banner/b18.jpg'
import b14 from '../Assets/banner/b14.png'
import { motion } from 'framer-motion'

const Home = () => {

  const girlImage = {
    backgroundImage: `url(${hero4})`
  }

  const shadowImage = {
    backgroundImage: `url(${button})`
  }

  const banner_Image = {
    backgroundImage: `url(${b2})`
  }

  const banner_boxImage_1 = {
    backgroundImage: `url(${b17})`
  }

  const banner_boxImage_2 = {
    backgroundImage: `url(${b10})`
  }

  const banner_boxImage_3 = {
    backgroundImage: `url(${b4})`
  }

  const banner_boxImage_4 = {
    backgroundImage: `url(${b7})`
  }

  const banner_boxImage_5 = {
    backgroundImage: `url(${b18})`
  }

  const banner_boxImage_6 = {
    backgroundImage: `url(${b14})`
  }

  const starColor = {
    color: '#F3B519 ',
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

const textAnime_X = {
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
    <motion.section
    id ="hero" style={girlImage}>
        <motion.h4
        variants={textAnime_Y}
        >Trade-in-Offer</motion.h4>
        <motion.h2
        variants={textAnime_Y}>Super Value Deals</motion.h2>
        <motion.h1
        variants={textAnime_Y}>On all products</motion.h1>
        <motion.p
        variants={textAnime_Y}>Save more with coupons & up to 70% off</motion.p>
        <motion.button
        variants={textAnime_Y} style={shadowImage}><Link to='/shop'>Shop Now</Link></motion.button>

    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
    id = "feature" className="section-p1">
        <motion.div
        variants={textAnime_Y}
         className="fe-box">
            <img src={f1} alt=""/>
            <h6>Free Shipping</h6>
        </motion.div>
        <motion.div
         variants={textAnime_Y}
         className="fe-box">
            <img src={f2} alt=""/>
            <h6>Online Order</h6>
        </motion.div>
        <motion.div
         variants={textAnime_Y}
         className="fe-box">
            <img src={f3} alt=""/>
            <h6>Save Money</h6>
        </motion.div>
        <motion.div
         variants={textAnime_Y}
         className="fe-box">
            <img src={f4} alt=""/>
            <h6>Promotion</h6>
        </motion.div>
        <motion.div
         variants={textAnime_Y}
         className="fe-box">
            <img src={f5} alt=""/>
            <h6>Happy Sell</h6>
        </motion.div>
        <motion.div
         variants={textAnime_Y}
         className="fe-box">
            <img src={f6} alt=""/>
            <h6>24/7 Support</h6>
        </motion.div>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
     id="product1" className="section-p1">
        <motion.h2
         variants={textAnime_X}
        >Featured Products</motion.h2>
        <motion.p
        variants={textAnime_X}
        >Summer Collection New Modern Design</motion.p>
        <motion.div className="pro-container">
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_1} alt=""/>
                <motion.div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Asrtronaut T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarHalf style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </motion.div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_2} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Floral T-Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarHalf style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_3} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Floral T-Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarHalf style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_4} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Floral T-Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_5} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Blue Floral T-Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_6} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Stripped Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarHalf style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_7} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>High Toe Pant</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={f_8} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Short Kurti</h5>
                    <div className="star">
                    <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarFill style={starColor}/>
                        <BsStarHalf style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
        </motion.div>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
     id="banner" style={banner_Image} className="section-m1">
        <motion.h4
        variants={textAnime_X}
        >Repair Services</motion.h4>
        <motion.h2
        variants={textAnime_X}
        >Upto <span>70% Off</span> - All T-Shirts & Accessories</motion.h2>
        <motion.button
        variants={textAnime_X}
         className="normal"><Link to='/about'>Explore More</Link></motion.button>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
     id="product1" className="section-p1">
        <motion.h2
        variants={textAnime_X}
        >New Arrivals</motion.h2>
        <motion.p
        variants={textAnime_X}
        >Summer Collection New Modern Design</motion.p>
        <div className="pro-container">
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n1} alt=""/>
                <div className="des">
                    <span>tommy Hilfiger</span>
                    <h5>Light Blue T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>799</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n2} alt=""/>
                <div className="des">
                    <span>Puma</span>
                    <h5>Checks Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>699</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n3} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Plain Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>999</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n4} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Printed T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n5} alt=""/>
                <div className="des">
                    <span>HRX</span>
                    <h5>Blue Plain T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>799</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n6} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Short Pants</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n7} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Full Sleeve Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>999</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
            <motion.div
            variants={textAnime_Y}
             className="pro">
                <img src={n8} alt=""/>
                <div className="des">
                    <span>Nike</span>
                    <h5>Printed T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </motion.div>
        </div>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.4}}
     id="sm-banner" className="section-p1">
        <motion.div variants={textAnime_X} className="banner-box" style={banner_boxImage_1}>
            <h4>Crazy Deals</h4>
            <h2>Buy 1 Get 1 free</h2>
            <span>The best classic dress is on sale at pluto</span>
            <button className="white">Learn More</button>
        </motion.div>
        <motion.div variants={textAnime_rightX} className="banner-box banner-box2" style={banner_boxImage_2}>
            <h4>spring/summer</h4>
            <h2>Upcoming Seasons</h2>
            <span>The best classic dress is on sale at pluto</span>
            <button className="white">Collection</button>
        </motion.div>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.6}}
     id="banner3" >
        <motion.div variants={textAnime_X}  className="banner-box" style={banner_boxImage_3}>
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection - 50% OFF</h3>
        </motion.div>
        <motion.div variants={textAnime_Y} className="banner-box banner-box2" style={banner_boxImage_4}>
            <h2>ACCESSORIES SALE</h2>
            <h3>New Trendy Designs</h3>
       </motion.div>
       <motion.div variants={textAnime_rightX} className="banner-box banner-box3" style={banner_boxImage_5}>
            <h2>TOPWEAR SALE</h2>
            <h3>Spring / Summer Sale</h3>
        </motion.div>
    </motion.section>

    <motion.section
    initial='offScreen'
    whileInView='onScreen'
    viewport={{once:true, amount: 0.3}}
    transition={{staggerChildren: 0.6}}
     id="newsletter" className="section-p1 section-m1" style={banner_boxImage_6}>
        <div className="Newstext">
            <motion.h4 variants={textAnime_Y}>Sign up for Newsletter</motion.h4>
            <motion.p variants={textAnime_Y}>Get E-mail updates about our latest shop and <span>Special offers</span></motion.p>
        </div>
        <motion.div variants={textAnime_Y} className="form">
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>

        </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default Home