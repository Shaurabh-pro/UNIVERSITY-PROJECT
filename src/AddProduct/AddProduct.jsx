import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import n1 from '../Assets/products/n1.jpg'
import n2 from '../Assets/products/n2.jpg'
import n3 from '../Assets/products/n3.jpg'
import n4 from '../Assets/products/n4.jpg'
import f1 from '../Assets/products/f1.jpg'
import f2 from '../Assets/products/f2.jpg'
import f3 from '../Assets/products/f3.jpg'
import f4 from '../Assets/products/f4.jpg'


const AddProduct = () => {
  return (
    <>
     <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
            <img src={f1} width="100%" id="MainImg" alt=""/>
            <div className="small-img-group">
                <div className="small-img-col">
                    <img src={f1}  width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={f2}  width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={f3}  width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={f4}  width="100%" className="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div className="single-pro-details">
            <h6>Home/T-Shirts</h6>
            <h4>Mens Fashion T Shirts</h4>
            <h2>&#8377 899</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXl</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type="number" value="1"/>
            <button className="normal">Add to Cart</button>
            <h4>Product Details</h4>
            <span>The Golden Ultra Cotton T-Shirts is made from a substential 6.0 oz 
                per sq. yd fabric constructed fromm 100% cotton, this classic fit preshrunk jersey unit provide
                unmatched comfort with each wear. Featuring a taped neck and shoulder, and
                a seamless double-needle collar, and available in a range of colors, it offers it All
                in the ultimate head-turning package.</span>
        </div>
    </section>

    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src={n1} alt="n1"/>
                <div className="des">
                    <span>tommy Hilfiger</span>
                    <h5>Light Blue T-Shirts</h5>
                    <div className="star">
                         <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
                    <h4>&#8377 799</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </div>
            <div className="pro">
                <img src={n2} alt=""/>
                <div className="des">
                    <span>Puma</span>
                    <h5>Checks Shirts</h5>
                    <div className="star">
                          <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                    </div>
                    <h4>&#8377 699</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </div>
            <div className="pro">
                <img src={n3} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Plain Shirts</h5>
                    <div className="star">
                    <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>
                        <BsStar/>
                    </div>
                    <h4>&#8377 999</h4>
                </div>
                <button className="cart">Add to Cart</button>
            </div>
            <div className="pro">
                <img src={n4} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Printed T-Shirts</h5>
                    <div className="star">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStar/>
                        <BsStar/>
                    </div>
                    <h4>&#8377 899</h4>
                </div>
                <button className="cart">Add to Cart</button>
        </div>
        </div>
    </section>

    <section id="newsletter" className="section-p1 section-m1">
        <div className="Newstext">
            <h4>Sign up for Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>Special offers</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>

        </div>
    </section>
    </>
  )
}

export default AddProduct