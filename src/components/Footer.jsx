import React from "react";

function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="/image/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong> +01 2222 365{" "}
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 10:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="image/play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="image/pay.png" alt="" />
      </div>

      <div className="copyright">
        <p>© 2024, Areeba Khan - HTML CSS Ecommerce Templete</p>
      </div>
    </footer>
  );
}

export default Footer;
