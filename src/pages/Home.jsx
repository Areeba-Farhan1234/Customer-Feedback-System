import React from "react";

function Home() {
  return (
    <>
      <section id="hero">
        <h4>Trade-In-Offer</h4>
        <h2>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p>save more with coupons & up to 70% Off! </p>
        <button>Shop now</button>
      </section>

      <Features />

      <Products1 />

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% off</span> - All T-Shirt & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>

      <Products2 />

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at care</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <span>The best classic dress is on sale at care</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>Season Sale</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2023</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints </h3>
        </div>
      </section>

      <section id="Newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Home;

function Features() {
  const features = [
    { src: "/image/f1.png", text: "Free Shipping" },
    { src: "/image/f2.png", text: "Online Order" },
    { src: "/image/f3.png", text: "Save Money" },
    { src: "/image/f4.png", text: "Promotions" },
    { src: "/image/f5.png", text: "Happy Sell" },
    { src: "/image/f6.png", text: "24/7 Support" },
  ];

  return (
    <section id="feature" className="section-p1">
      {features.map((feature, index) => (
        <div key={index} className="fe-box">
          <img src={feature.src} alt={feature.text} />
          <h6>{feature.text}</h6>
        </div>
      ))}
    </section>
  );
}

const Products1 = () => {
  const products = [
    {
      src: "/image/f1.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f2.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f3.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f4.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f5.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f6.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f7.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/f8.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
  ];
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product, index) => (
          <div key={index} className="pro">
            <img src={product.src} alt={product.name} />
            <div className="des">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>{product.price}</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Products2 = () => {
  const products = [
    {
      src: "/image/n1.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n2.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n3.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n4.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n5.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n6.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n7.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      src: "/image/n8.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
  ];
  return (
    <section id="product1" className="section-p1">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product, index) => (
          <div key={index} className="pro">
            <img src={product.src} alt={product.name} />
            <div className="des">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>{product.price}</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
