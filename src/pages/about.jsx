import React from 'react'

const about = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="image/a6.jpg" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi sapiente quia veritatis neque, fugiat amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi sapiente quia veritatis neque, fugiat amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi sapiente quia veritatis neque, fugiat amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi sapiente quia veritatis neque, fugiat amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi sapiente quia veritatis neque, fugiat amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti sequi.
          </p>
          <abbr title="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit quasi eligendi maxime nemo blanditiis impedit.
          </abbr>
          <br /><br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, odit quasi eligendi maxime nemo blanditiis impedit.
          </marquee>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="image/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="image/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="image/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="image/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="image/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="image/f6.png" alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

    </div>
  )
}

export default about