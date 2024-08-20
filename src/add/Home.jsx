import React from 'react'
import './home.css'

function AddProduct() {
  return (
    <div>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super Value deals</h2>
        <h1>On all Products</h1>
        <p>Save more with coupons with 70% off</p>
        <button>Register</button>
      </section>

      <section id="feature" class="section-p1">
       <div class="fe-box">
          <img src="/images/feature/f1.png" alt="Image description" />
           <h6>free-shipping</h6>
        </div>
         

        <div class="fe-box">
          <img src="/images/feature/f2.png" alt="Image description" />
           <h6>Online Order</h6>
        </div>

        <div class="fe-box">
          <img src="/images/feature/f3.png" alt="Image description" />
           <h6>save-money</h6>
        </div>

        <div class="fe-box">
          <img src="/images/feature/f4.png" alt="Image description" />
           <h6>promotions</h6>
        </div>

        <div class="fe-box">
          <img src="/images/feature/f5.png" alt="Image description" />
           <h6>happy-sale</h6>
        </div>

        <div class="fe-box">
          <img src="/images/feature/f6.png" alt="Image description" />
           <h6>24*7 support</h6>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h2>Featured-Products</h2>
        <p>Summer Collection in modern  design</p>
        <div class="pro-container">

          <div class="pro">
            <img src="images/products/f1.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div class="pro">
            <img src="images/products/f2.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f3.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f4.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$88</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f5.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$58</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f6.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$18</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f7.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$38</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


          <div class="pro">
            <img src="images/products/f8.jpg"></img>
            <div class="des">
              <span>Shirts</span>
              <h5>cartoon astronut t-shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$98</h4>
            </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
          </div>


        </div>
      </section>

      <section id="banner" class="section-m1">
        <h4>Repair Service</h4>
        <h2>Upto <span>70% Off</span> for All shirts and Accesorries</h2>
        <button className='normal'>Explore More</button>
      </section>

    </div>
  )
}

export default AddProduct