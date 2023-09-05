import f1 from '../Assets/products/f1.jpg'
import f2 from '../Assets/products/f2.jpg'
import f3 from '../Assets/products/f3.jpg'
import f4 from '../Assets/products/f4.jpg'
import f5 from '../Assets/products/f5.jpg'
import f6 from '../Assets/products/f6.jpg'
import f7 from '../Assets/products/f7.jpg'
import f8 from '../Assets/products/f8.jpg'
import b1 from '../Assets/banner/b1.jpg'
import n1 from '../Assets/products/n1.jpg'
import n2 from '../Assets/products/n2.jpg'
import n3 from '../Assets/products/n3.jpg'
import n4 from '../Assets/products/n4.jpg'
import n5 from '../Assets/products/n5.jpg'
import n6 from '../Assets/products/n6.jpg'
import n7 from '../Assets/products/n7.jpg'
import n8 from '../Assets/products/n8.jpg'
 import { BsStarFill , BsStarHalf, BsStar } from 'react-icons/bs'
 import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Shop = () => {

    const starColor = {
        color: '#F3B519 ',
    }
  
  const stayHome = {
    backgroundImage: `url(${b1})`
  }

  const fontGap = {
    margin: '0 .4rem'
  }

 const textAnime_Y= {
    offScreen:{
        y:100,
        opacity:0
    },
    onScreen:{
        y:0,
        opacity:1
    }
 }

 const textAnime_X_left= {
    offScreen:{
        x:100,
        opacity:0
    },
    onScreen:{
        x:0,
        opacity:1
    }
 }

 const textAnime_X_right= {
    offScreen:{
        x:200,
        opacity:0
    },
    onScreen:{
        x:0,
        opacity:1
    }
 }

  return (
    <motion.div 
    initial='offScreen'
    animate='onScreen'
    viewport={{once:false, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
    >
    <motion.section
    initial='offScreen'
    animate='onScreen'
    viewport={{once:false, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
     id ="page-header" style={stayHome}>
        <motion.h2 variants={textAnime_Y}>#stayhome</motion.h2>
        <motion.p variants={textAnime_Y}>Save more with coupons & up to 70% off</motion.p>
    </motion.section>

    <motion.section id="product1" className="section-p1">
        <motion.div className="pro-container">
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f1} alt=""/>
                <div className="des">
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
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f2} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Floral T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarHalf style={starColor} />
                        <BsStar style={starColor} />
                        <BsStar style={starColor} />
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f3} alt=""/>
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
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f4} alt=""/>
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
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f5} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Blue Floral T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarHalf style={starColor} />
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f6} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Stripped Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarHalf style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f7} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>High Toe Pant</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                       
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={f8} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Short Kurti</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
              
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
        
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n1} alt=""/>
                <div className="des">
                    <span>tommy Hilfiger</span>
                    <h5>Light Blue T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarHalf style={starColor} />
                        <BsStar style={starColor}/>
                       
                    </div>
                    <h4><BiRupee/>799</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n2} alt=""/>
                <div className="des">
                    <span>Puma</span>
                    <h5>Checks Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    
                    </div>
                    <h4><BiRupee/>699</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n3} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Plain Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>999</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n4} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Printed T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                  
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n5} alt=""/>
                <div className="des">
                    <span>HRX</span>
                    <h5>Blue Plain T-Shirts</h5>
                    <div className="star">
                    <BsStarFill style={starColor} />
                    <BsStarFill style={starColor} />
                    <BsStarFill style={starColor} />
                    <BsStar style={starColor}/>
                    <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>799</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n6} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Short Pants</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarHalf style={starColor} />
                        
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n7} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Full Sleeve Shirt</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>999</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
            <motion.div variants={textAnime_Y} className="pro">
                <img src={n8} alt=""/>
                <div className="des">
                    <span>Nike</span>
                    <h5>Printed T-Shirts</h5>
                    <div className="star">
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStarFill style={starColor} />
                        <BsStar style={starColor}/>
                        <BsStar style={starColor}/>
                    </div>
                    <h4><BiRupee/>899</h4>
                </div>
                <Link to='/addproduct' ><button className="cart">Add to Cart</button></Link>
            </motion.div>
        </motion.div>
    </motion.section>

    <motion.section
    variants={textAnime_Y}
     id="pagination" className="section-p1">
        <Link style={fontGap} to="/shop">1</Link>
        <Link style={fontGap} to="/shop">2</Link>
        <Link style={fontGap} to="/shop"><AiOutlineArrowRight/></Link>
    </motion.section>

    <motion.section
     id="newsletter" className="section-p1 section-m1">
        <motion.div variants={textAnime_X_left} className="Newstext">
            <motion.h4>Sign up for Newsletter</motion.h4>
            <motion.p >Get E-mail updates about our latest shop and <span>Special offers</span></motion.p>
        </motion.div>
        <motion.div variants={textAnime_X_right} className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>

        </motion.div>
    </motion.section>
    </motion.div>
  )
}

export default Shop